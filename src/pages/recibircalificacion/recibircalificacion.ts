import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { PrincipalPage} from '../principal/principal';
import { ResultadosbusquedaPage } from '../resultadosbusqueda/resultadosbusqueda';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from 'ionic-angular';
import { ErrorPage } from '../error/error';
import { CuestionarioPage } from '../cuestionario/cuestionario'
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the RecibircalificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recibircalificacion',
  templateUrl: 'recibircalificacion.html',
})
export class RecibircalificacionPage {
  public datos : FormGroup;
  public datosusuario:any=[];
  public empresa:any;
  public idusuario:any;
  public idconfiguracion_usuario:any;
  public datosoffline:any=[];
  public loandings:any;
  public loading_preparando = this.Load.create({content: 'Solicitando Preguntas',});
  constructor(

    public Load:LoadingController,
    public http: HttpProvider,public toastCtrl: ToastController,private barcodeScanner: BarcodeScanner,public alertCtrl: AlertController,private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
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
  buscarrazonsocial(){
    this.navCtrl.setRoot(ResultadosbusquedaPage,{palabra:this.datos.value.palabra,tipo:"recibe"});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecibircalificacionPage');
  }
  home(){
    this.navCtrl.setRoot(PrincipalPage);
  }
  scann(){
    this.barcodeScanner.scan({
      disableSuccessBeep: false,
      showFlipCameraButton : false,//boton para cambiar las camaras
      torchOn: false,//led
      prompt : "Coloca el QR en el recuadro",
    }).then(barcodeData => {
      var resultado=barcodeData.text;
      var datos=resultado.split("|");
      if(localStorage.offline){
        this.offbusca_usuario(resultado)
      }else{
        this.busca_usuario(resultado);
      }
     //this.presentToast(resultado);
     }).catch(err => {
      this.navCtrl.push(ErrorPage,{error:JSON.stringify(err)})
      //this.presentToast("Error: "+JSON.stringify(err));
     });
  }

  busca_usuario(usuario){
    this.loading_preparando.present()
    let datosusuario=JSON.parse(localStorage.getItem("datosuaurio"));
    //var cade={"tipo":"realiza","usuario_a_calificar":usuario,"tipo_usuario_calificar":tipo,"empresa":datosusuario.datos.IDEmpresa,"usuario":datosusuario.datos.IDUsuario}
    var cade={cliente:usuario,empresa:this.empresa,usuario:this.idusuario,idconfiguracion:this.idconfiguracion_usuario}
    this.http.busca_usuario_recibe(cade)
    .subscribe((pasa)=>{
       this.loading_preparando.dismiss()
      if(pasa["pass"]===0){
          this.presentToast(pasa["mensaje"]);
      }else{
        alert(JSON.stringify(pasa));
        localStorage.removeItem("ambas");
         let  datos_receptora=pasa["cliente"];
         let datoscalifica=Array({tipo:"recibe",datos_emisor:{"empresa":datos_receptora["ID"],"perfil":datos_receptora["TipoE"],"IDPerfil":datos_receptora["conficlie"]},datos_receptora:{"usuario":this.idusuario,"empresa":this.empresa,"IDPerfil":this.idconfiguracion_usuario,"perfil":"I"}});
      if(pasa["cliente"]["TipoE"]==="E"){
          if(pasa["cliente"]["Actipass"]==='1'){
            const datos_yen={datoscalifica,pasa};
            localStorage.setItem("datoscalificacion",JSON.stringify(datos_yen));
            this.alertmandarpass("Login","Por favor ingresa tu contraseña de acceso y presiona ACEPTAR. En caso de que no tengas o no te acuerdes de tu contraseña presiona ENVIAR SMS para que se te envíe una nueva contraseña al teléfono "+pasa["cliente"]["Telcontact"]+". En el caso de que no sea tu número de teléfono, el gestor de "+this.datosusuario["empresa"][0]["RazonSocial"]+" tendrá que cambiarlo",pasa["cliente"]["Telcontact"],pasa["cliente"]["ID"],pasa["cliente"]["TipoE"]);
          }else{
            this.navCtrl.push(CuestionarioPage,{datoscalifica:JSON.stringify(datoscalifica),cuestionario:JSON.stringify({Mensaje:pasa["cuestionario"]})});
          }       
        }else{
          this.alertpassword("Contraseña",'Para poder calificar a este usuario, por favor ingresa tu contraseña y presiona <strong>ACEPTAR</strong>.',pasa["cliente"]["ID"],pasa["cliente"]["TipoE"]);
        }
      }
    },(error)=>{
      this.loading_preparando.dismiss()
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
    let tipo=this.datosoffline["relaciones"][0]["Tipo"];
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
      this.datosoffline["cues_recibe"].forEach((elemt)=>{
        if(elemt["PerfilCalifica"]==datos_receptora["IDConfig"] && elemt["TPEmisor"]==tipo){
          cues=elemt["Cuestionario"];
          return false;
        }
      })
      cuestionario=this.obtener_preguntas(cues);
      let datoscalifica=Array({tipo:"recibe",datos_emisor:{"empresa":datos_receptora["IDCliente"],"perfil":tipo,"IDPerfil":datos_receptora["IDConfig"]}, datos_receptora:{"usuario":this.idusuario,"empresa":this.empresa,"IDPerfil":this.idconfiguracion_usuario,"perfil":"I"}});
      this.navCtrl.push(CuestionarioPage,{datoscalifica:JSON.stringify(datoscalifica),cuestionario:JSON.stringify(cuestionario)})
    }
    
    //this.navCtrl.push(ErrorPage,{error:JSON.stringify(this.datosoffline)})
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
   
   /* if(numero==="" || numero===null || numero===undefined || numero.length<10){
      this.alertinfo("Alerta","El número que esta registrado no es valido, porfavor contacta al adminstrador.");
    }else{
      const datos={empresa}
      this.create_payload("Cargando datos");
      this.http.update_clave_cleinte(datos)
      .subscribe(resp=>{
        this.loandings.dismiss();
        this.create_payload("Enviando SMS");
        this.sms.send('+52'+numero,'La contraseña para qvaluation es: '+resp["clave"])
        .then(data=>{
          this.loandings.dismiss();
          this.alertpassword("Login",'Verifica los SMS en tu teléfono, ingresa la contraseña que se te ha enviado y presiona ACEPTAR',empresa,tipo);
        },error=>{
          this.loandings.dismiss();
          this.alertinfo("Alerta","Error: "+JSON.stringify(error));
        })
        
      })
      
    }*/
    
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
        this.navCtrl.push(CuestionarioPage,{cuestionario:JSON.stringify({Mensaje:datos_calif["pasa"]["cuestionario"]}),datoscalifica:JSON.stringify(datos_calif["datoscalifica"])});
      }else{
        this.alertinfo("Alerta","Contraseña incorrecta");  
      }
      
    })
  }




}
