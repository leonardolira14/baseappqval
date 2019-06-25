import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { PrincipalPage} from '../principal/principal';
import { CuestionarioPage } from '../cuestionario/cuestionario';
import { RealizarcalificacionPage } from '../realizarcalificacion/realizarcalificacion';
import { RecibircalificacionPage } from  '../recibircalificacion/recibircalificacion'; 
/**
 * Generated class for the ResultadosbusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultadosbusqueda',
  templateUrl: 'resultadosbusqueda.html',
})
export class ResultadosbusquedaPage {
  public resultados:any=[];
  public palabra: any;
  public tipo:any;
  public datosusuario:any=[];
  public loading = this.Load.create({content: 'Cargado',});
  public loading_preparando = this.Load.create({content: 'Solicitando Preguntas',});
  public datosoffline:any;
  constructor(public Load:LoadingController, public http: HttpProvider,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
   this.palabra=navParams.get("palabra");
   this.tipo=navParams.get("tipo");
   if(localStorage.offline){
      this.datosoffline=JSON.parse(localStorage.datosoffline);
   }
   this.decicion_off();
   this.datosusuario=JSON.parse(localStorage.datosuaurio);
   
  }
  alertinfo(titulo,texto){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Entiendo']
    });
    alert.present();
  }
  decicion_off(){
    if(localStorage.offline){
      this.busqueda_off();
    }else{
      this.listaresultados();
    }
  }
  busqueda_off(){
    let datos=JSON.parse(localStorage.datosoffline);
    if(this.tipo=="realiza"){
      datos["relaciones"][1]["realiza"].forEach(cliente => {
        let nombre=cliente["Nombre"].toUpperCase();
        let palabra=this.palabra.toUpperCase();
        if(nombre.includes(palabra)==true){         
          this.resultados.push({Num:cliente["IDCliente"],numconfig:cliente["IDConfig"],config:datos["relaciones"][1]["Tipo"],Nombre:cliente["Nombre"]});
        }
      
     });
    }else if(this.tipo=="recibe"){
      datos["relaciones"][0]["recibe"].forEach(cliente => {
        let nombre=cliente["Nombre"].toUpperCase();
        let palabra=this.palabra.toUpperCase();
        if(nombre.includes(palabra)==true){
         this.resultados.push({Num:cliente["IDCliente"],numconfig:cliente["IDConfig"],config:datos["relaciones"][0]["Tipo"],Nombre:cliente["Nombre"]});
        }
      });
    }
    //console.log( this.resultados);
  }
  listaresultados(){
    this.loading.present();
    let datosusuario=JSON.parse(localStorage.getItem("datosuaurio"));
    let palabra =Array({"tipo":this.tipo,"palabra":this.palabra,"empresa":datosusuario.datos.IDEmpresa,"usuario":datosusuario.datos.IDUsuario});
    console.log(palabra);
    this.http.buscarrazonsocial(palabra)
   .subscribe(res => {
    this.loading.dismiss()
     this.resultados=res["empresas"];
     console.log(this.resultados)
     if(this.resultados.length==0){
       if(this.tipo=="recibe"){
          this.navCtrl.setRoot(RecibircalificacionPage);
       }else{
        this.navCtrl.setRoot(RealizarcalificacionPage);
       }
      this.alertinfo("Alerta","Sin resultados");
     
     }
   }, (err) => {
    this.loading.dismiss()
    console.log(err);
    //this.alertinfo("Alerta",err);
  });
  }
  ionViewDidLoad() {
    
  }
 
  selecrealiza_recibe(num,config,numconfig){
    console.log(this.tipo)
    if(localStorage.offline){
      if(this.tipo=="recibe"){
        this.recibo_calificacion_off(num,config,numconfig)
      }
      if(this.tipo=="realiza"){
        this.calificar_off(num,config,numconfig);
      }
    }else{  
      if(this.tipo=="recibe"){
        this.recibo_calificacion(num,config,numconfig)
      }
      if(this.tipo=="realiza"){
        this.calificar(num,config,numconfig);
      }
    }
    
  }
  recibo_calificacion_off(num,config,numconfig){
    let usuario=this.datosusuario.datos.IDUsuario;
    let empresa=this.datosusuario.datos.IDEmpresa;
    let configemiso=this.datosusuario.datos.IDConfig;
    let cues:string;
    this.datosoffline["cues_recibe"].forEach((elemt)=>{
      if(elemt["PerfilCalifica"]==numconfig && elemt["TPEmisor"]==config){
        cues=elemt["Cuestionario"];
        return false;
      }
    })
    let cuestionario=this.obtener_preguntas(cues);
    console.log(cuestionario);
  
    let datoscalifica=Array({tipo:"recibe",datos_emisor:{"empresa":num,"perfil":config,"IDPerfil":numconfig},datos_receptora:{"usuario":usuario,"empresa":empresa,"IDPerfil":configemiso,"perfil":"I"}});
    this.navCtrl.push(CuestionarioPage,{datoscalifica:JSON.stringify(datoscalifica),cuestionario:JSON.stringify(cuestionario)})
  }
  calificar_off(num,config,numconfig){
   
    let usuario=this.datosusuario.datos.IDUsuario;
    let empresa=this.datosusuario.datos.IDEmpresa;
    let configemiso=this.datosusuario.datos.IDConfig;
    let cues:string;
    this.datosoffline["cues_realiza"].forEach((elemt)=>{
      if(elemt["PerfilCalificado"]==numconfig && elemt["TPReceptor"]==config){
        cues=elemt["Cuestionario"];
        return false;
      }
    })
    let cuestionario=this.obtener_preguntas(cues);
    let datoscalifica=Array({tipo:"realiza",datos_receptora:{"empresa":num,"perfil":config,"IDPerfil":numconfig},datos_emisor:{"usuario":usuario,"empresa":empresa,"IDPerfil":configemiso,"perfil":"I"}});
    this.navCtrl.push(CuestionarioPage,{datoscalifica:JSON.stringify(datoscalifica),cuestionario:JSON.stringify(cuestionario)})
  }
  recibo_calificacion(num,config,numconfig){
    if(numconfig==="0"){
      this.alertinfo("Alerta","Esta empresa no tiene un grupo asignado.");
     }else{
      //this.loading_preparando.present();
      let usuario=this.datosusuario.datos.IDUsuario;
      let empresa=this.datosusuario.datos.IDEmpresa;
      let configemiso=this.datosusuario.datos.IDConfig;
      let datos=Array({tipo:"recibe",datos_emisor:{"empresa":num,"perfil":config,"IDPerfil":numconfig},datos_receptora:{"usuario":usuario,"empresa":empresa,"IDPerfil":configemiso,"perfil":"I"}});
      this.http.solicitarcuestionariorealiza(datos)
      .subscribe(res=>{
        if(res["pass"] == 0){
          this.alertinfo("Alerta","No tiene relación para calificar");
        }else
        {
        localStorage.removeItem("ambas");
       // this.loading_preparando.dismiss();
        this.navCtrl.push(CuestionarioPage,{cuestionario:JSON.stringify(res),datoscalifica:JSON.stringify(datos)});
         }
      },(err)=>{
        console.log(err)
      })
    }
    console.log(num,config,numconfig);
  }
  calificar(num,config,numconfig){ 
    if(numconfig==="0"){
     this.alertinfo("Alerta","Esta empresa no tiene un grupo asignado.");
    }else{
      this.loading_preparando.present()
      let usuario=this.datosusuario.datos.IDUsuario;
      let empresa=this.datosusuario.datos.IDEmpresa;
      let configemiso=this.datosusuario.datos.IDConfig;
      let datos=Array({tipo:"realiza",datos_receptora:{"empresa":num,"perfil":config,"IDPerfil":numconfig},datos_emisor:{"usuario":usuario,"empresa":empresa,"IDPerfil":configemiso,"perfil":"I"}});
      this.http.solicitarcuestionariorealiza(datos)
      .subscribe((res)=>{
        this.loading_preparando.dismiss();
        if(res["pass"] == 0){
          this.alertinfo("Alerta","No tiene relación para calificar");
        }else
        {
          this.navCtrl.push(CuestionarioPage,{cuestionario:JSON.stringify(res),datoscalifica:JSON.stringify(datos)});
        }
        
        
        
      },(err)=>{
        console.log(err);
      })
    }
    
  }
  home(){
    this.navCtrl.setRoot(PrincipalPage);

  }
  dame_pregunta(nomencaltura){
    var pregunta="";
    this.datosoffline["preguntas"].forEach(element => {
      if(nomencaltura==element["Nomenclatura"]){
        pregunta=element;
      }
    });
    return pregunta;
  }
  obtener_preguntas(cuestionario){
    let cuestionarios:any=[];
    let nomenclaturas=cuestionario.split(",");
    nomenclaturas.forEach(element => {
      let datos=this.dame_pregunta(element);
      cuestionarios.push({Forma:datos["Forma"],Pregunta:datos["Pregunta"],Num:datos["IDPregunta"]})
    });
    return cuestionarios;
  }

}
