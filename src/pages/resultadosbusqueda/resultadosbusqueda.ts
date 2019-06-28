import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { PrincipalPage} from '../principal/principal';
import { CuestionarioPage } from '../cuestionario/cuestionario';
import { RealizarcalificacionPage } from '../realizarcalificacion/realizarcalificacion';
import { RecibircalificacionPage } from  '../recibircalificacion/recibircalificacion'; 

import { SMS } from '@ionic-native/sms';


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
  public loandings:any;
  constructor(
    private sms:SMS,
    public Load:LoadingController, public http: HttpProvider,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
   this.palabra=navParams.get("palabra");
   this.tipo=navParams.get("tipo");
   if(localStorage.offline){
      this.datosoffline=JSON.parse(localStorage.datosoffline);
   }
   this.decicion_off();
   this.datosusuario=JSON.parse(localStorage.datosuaurio);
   
  }
  create_payload(texto){
    this.loandings= this.Load.create({content: texto});
    this.loandings.present();
  }
  alertpassword(titulo,texto,empresa,tipo){
    let alert = this.alertCtrl.create({
      title:titulo,
      message: texto,
      inputs: [
        {
          name: 'contrasena',
          placeholder: 'Contraseña',
          type:'password'
        },
      ],
      buttons: [
        {
          text: 'Cerrar',
          handler: data => {
            
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.check_pass(data.contrasena,empresa,tipo);
          }
        }
      ]
    });
    alert.present();
  }
  alertmandarpass(titulo,texto,numero,empresa,tipo){
    let alert = this.alertCtrl.create({
      title:titulo,
      message: texto,
      inputs: [
        {
          name: 'contrasena',
          placeholder: 'Contraseña',
          type:'password'
        },
      ],
      buttons: [
        {
          text: 'Cerrar',
          handler: data => {
            
          }
        },
        {
          text: 'Enviar SMS',
          handler: data => {
            this.enviar_sms(numero,empresa,tipo);
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.check_pass(data.contrasena,empresa,tipo);
          }
        }
      ]
    });
    alert.present();
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
      this.loading_preparando.present();
      let usuario=this.datosusuario.datos.IDUsuario;
      let empresa=this.datosusuario.datos.IDEmpresa;
      let configemiso=this.datosusuario.datos.IDConfig;
      let datos=Array({tipo:"recibe",datos_emisor:{"empresa":num,"perfil":config,"IDPerfil":numconfig},datos_receptora:{"usuario":usuario,"empresa":empresa,"IDPerfil":configemiso,"perfil":"I"}});
      this.http.solicitarcuestionariorealiza(datos)
      .subscribe(res=>{
        this.loading_preparando.dismiss();
        if(res["pass"] == 0){
          this.alertinfo("Alerta","No tiene relación para calificar");
        }else
        {
          console.log(res);
          
          localStorage.removeItem("ambas");
          if(res["Tipoperfil"]==="I"){
            this.alertpassword("Login",'Para poder calificar a este usuario, por favor ingresa tu contraseña y presiona ACEPTAR.',num,res["Tipoperfil"]);
          }else{
            if(res["datosempresa"]["Actipass"]==='1'){
              const datos_yen={datos,res};
              localStorage.setItem("datoscalificacion",JSON.stringify(datos_yen));
              this.alertmandarpass("Login","Por favor ingresa tu contraseña de acceso y presiona ACEPTAR. En caso de que no tengas o no te acuerdes de tu contraseña presiona <strong>ENVIAR SMS</strong> para que se te envíe una nueva contraseña al teléfono "+res["datosempresa"]["Telcontact"]+". En el caso de que no sea tu número de teléfono, el gestor de "+this.datosusuario["empresa"][0]["RazonSocial"]+" tendrá que cambiarlo",res["datosempresa"]["Telcontact"],res["datosempresa"]["IDCliente"],res["Tipoperfil"]);
            }else{
              this.navCtrl.push(CuestionarioPage,{cuestionario:JSON.stringify(res),datoscalifica:JSON.stringify(datos)});
            }
          }
         
       
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
  enviar_sms(numero,empresa,tipo){
    this.create_payload("Cargando datos");
    if(numero==="" || numero===null || numero===undefined || numero.length<10){
      this.alertinfo("Alerta","El número que esta registrado no es valido, porfavor contacta al adminstrador.");
    }else{
      const datos={empresa}
      this.http.update_clave_cleinte(datos)
      .subscribe(resp=>{
        this.loandings.dismiss();
        this.create_payload("Enviando SMS");
        this.sms.send('+52'+numero,'La contraseña para qvaluation es: '+resp["clave"])
        .then(data=>{
          this.loandings.dismiss();
          this.alertpassword("Contraseña",'Verifica los SMS en tu teléfono, ingresa la contraseña que se te ha enviado y presiona ACEPTAR',empresa,tipo);
        },error=>{
          this.loandings.dismiss();
          this.alertinfo("Alerta","Error: "+JSON.stringify(error));
        })
        
      })
      
    }
    
  }
  check_pass(clave,idempresa,tipo){
    //mando la contraseña para saber si es la correcta
    this.loading_preparando.present()
    const datos={clave,idempresa,tipo}
    this.http.validate_pasword_cliente(datos)
    .subscribe(resp=>{
      this.loading_preparando.dismiss()
      if(resp["ok"]===true){
        const datos_calif=JSON.parse(localStorage.datoscalificacion);
        this.navCtrl.push(CuestionarioPage,{cuestionario:JSON.stringify(datos_calif["res"]),datoscalifica:JSON.stringify(datos_calif["datos"])});
      }else{
        this.alertinfo("Alerta","Contraseña incorrecta");  
      }
      
    })
  }
}
