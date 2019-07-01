import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { MenuconfigPage } from '../menuconfig/menuconfig';
import { HttpProvider } from '../../providers/http/http';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ResultadosbusquedaPage} from '../resultadosbusqueda/resultadosbusqueda';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from 'ionic-angular';
import { ErrorPage } from '../error/error';
import { CuestionarioPage } from '../cuestionario/cuestionario'
@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  public datos : FormGroup;
  public datosusuario:any=[];
  public empresa:any;
  public idusuario:any;
  public idconfiguracion_usuario:any;
  public datosoffline:any=[];
  constructor(public toastCtrl: ToastController,private barcodeScanner: BarcodeScanner,public alertCtrl: AlertController,private formBuilder: FormBuilder,public http: HttpProvider,public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.datosusuario=JSON.parse(localStorage.getItem("datosuaurio"));
    this.empresa=this.datosusuario["datos"]["IDEmpresa"];
    this.idusuario=this.datosusuario["datos"]["IDUsuario"];
    this.idconfiguracion_usuario=this.datosusuario["datos"]["IDConfig"];
    this.datos=this.formBuilder.group({
      palabra:['',[Validators.required]]
  })
  if(localStorage.offline){
    this.datosoffline=JSON.parse(localStorage.datosoffline);
 }
 
  }
  presentToast(text) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

  alertinfo(titulo,texto){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Entiendo']
    });
    alert.present();
  }
  ionViewDidLoad() {
    
  
  }
  openMenul() {
    this.menuCtrl.open();
  }
  muestraconfig(){
    this.navCtrl.setRoot(MenuconfigPage);
  }
  buscarrazonsocial(){
    let array={tipo:"realiza",palabra:this.datos.value.palabra};
    this.navCtrl.setRoot(ResultadosbusquedaPage,array);
  }
  busca_usuario(usuario){
    
    //var cade={"tipo":"realiza","usuario_a_calificar":usuario,"tipo_usuario_calificar":tipo,"empresa":datosusuario.datos.IDEmpresa,"usuario":datosusuario.datos.IDUsuario}
    var cade={cliente:usuario,empresa:this.empresa,usuario:this.idusuario,idconfiguracion:this.idconfiguracion_usuario}
    this.http.busca_usuario(cade)
    .subscribe((pasa)=>{
      if(pasa["pass"]===0){
          this.presentToast(pasa["mensaje"]);
      }else{
        //this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":pasa})})
        let  datos_receptora=pasa["cliente"];
        let datoscalifica=Array({tipo:"realiza",datos_receptora:{"empresa":datos_receptora["ID"],"perfil":datos_receptora["TipoE"],"IDPerfil":datos_receptora["conficlie"]},datos_emisor:{"usuario":this.idusuario,"empresa":this.empresa,"IDPerfil":this.idconfiguracion_usuario,"perfil":"I"}});
        //this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":pasa["cuestionario"]})})
        this.navCtrl.push(CuestionarioPage,{datoscalifica:JSON.stringify(datoscalifica),cuestionario:JSON.stringify({Mensaje:pasa["cuestionario"]})});
      }
    },(error)=>{
      this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":error})})
      //this.presentToast(JSON.stringify(error));
    })
  }
  offbusca_usuario(usuario){
    let cuestionario:any;
    let cues:string="";
    let datos_receptora:any=[];
    let dat=usuario.split("|");
    let relaciones=this.datosoffline["relaciones"][1]["realiza"];
    let tipo=this.datosoffline["relaciones"][1]["Tipo"];
    let bandera:boolean=false;
      relaciones.forEach(elemen => {
        if(elemen["Usuario"]===dat[1]){
          bandera=true;
          datos_receptora=elemen;
         return;
        }
    });
    
    if(bandera===false){
      this.presentToast("Sin relación con este cliente/proveedor")
    }else{
      this.datosoffline["cues_realiza"].forEach((elemt)=>{
        if(elemt["PerfilCalificado"]==datos_receptora["IDConfig"] && elemt["TPReceptor"]==tipo){
          cues=elemt["Cuestionario"];
          return false;
        }
      })
      cuestionario=this.obtener_preguntas(cues);
      let datoscalifica=Array({tipo:"realiza",datos_receptora:{"empresa":datos_receptora["IDCliente"],"perfil":tipo,"IDPerfil":datos_receptora["IDConfig"]},datos_emisor:{"usuario":this.idusuario,"empresa":this.empresa,"IDPerfil":this.idconfiguracion_usuario,"perfil":"I"}});
      this.navCtrl.push(CuestionarioPage,{datoscalifica:JSON.stringify(datoscalifica),cuestionario:JSON.stringify(cuestionario)})
    }
    
    //this.navCtrl.push(ErrorPage,{error:JSON.stringify(this.datosoffline)})
  }
  scann(){
    this.barcodeScanner.scan({
      disableSuccessBeep: false,
      showFlipCameraButton : false,//boton para cambiar las camaras
      torchOn: false,//led
      prompt : "Coloca el QR en el recuadro",
    }).then(barcodeData => {
      var resultado=barcodeData.text;
      
      if(localStorage.offline){
          this.offbusca_usuario(resultado);
      }else{
        this.busca_usuario(resultado);
      }
     //this.presentToast(resultado);
     }).catch(err => {
      this.navCtrl.push(ErrorPage,{error:JSON.stringify(err)})
      //this.presentToast("Error: "+JSON.stringify(err));
     });
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
