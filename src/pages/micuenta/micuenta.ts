import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController  } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the MicuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-micuenta',
  templateUrl: 'micuenta.html',
})
export class MicuentaPage {
  public datosusuario:any=[];
  public datos:any=[];
  public nombre:string;
  public numero_usuario:string;
  public apellidos:string;
  public correo:string;
  public puesto:string;
  public usuario:string;
  public loading = this.Load.create({content: 'Cargado',});
  constructor(public Load:LoadingController,public http: HttpProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.datos=JSON.parse(localStorage.datosuaurio);
    this.datosusuario=this.datos["datos"];
    this.numero_usuario=this.datosusuario["IDUsuario"];
    this.nombre=this.datosusuario["Nombre"];
    this.apellidos=this.datosusuario["Apellidos"];
    this.correo=this.datosusuario["Correo"];
    this.usuario=this.datosusuario["Usuario"];
    this.puesto=this.datosusuario["Puesto"];
  }
  alertinfo(titulo,texto){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Entiendo']
    });
    alert.present();
  }
  presentPrompt(title,place_holder,tipo) {
    let alert = this.alertCtrl.create({
      title: title,
      inputs: [
        {
          name:"dato",
          placeholder: place_holder
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            if(tipo=="p"){
              this.puesto=data.dato
             }else if(tipo=="n"){
              this.nombre=data.dato
             }else if(tipo=="a"){
              this.apellidos=data.dato
             }else if(tipo=="ce"){
              this.correo=data.dato
             }else if(tipo=="u"){
              this.usuario=data.dato
             }
             this.loading.present();
             this.http.update_dateuser({"tipo":tipo,dato:data.dato,"idusuario":this.numero_usuario})
             .subscribe((resp)=>{
              localStorage.removeItem("datosuaurio");
              localStorage.setItem("datosuaurio",JSON.stringify(resp));
              this.loading.dismiss()
              this.alertinfo("","Datos Actualizados...")
             },(err)=>{
              this.loading.dismiss()
              console.log(err);
             })
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MicuentaPage');
  }
  mod_puesto(){
    this.presentPrompt("Ingresa nuevo puesto.","Puesto","p");
  }
  mod_usuario(){
    this.presentPrompt("Ingresa nuevo usuario.","Usuario","u");
  }
  mod_correo(){
    this.presentPrompt("Ingresa nuevo Correo Electronico.","Correo Electronico","ce");
  }
  mod_apellido(){
    this.presentPrompt("Ingresa nuevo Apellidos.","Apellidos","a");
  }
  mod_nombre(){
    this.presentPrompt("Ingresa nuevo Nombre.","Nombre","n");
  }

}
