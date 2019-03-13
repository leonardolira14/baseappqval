import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the SeguridadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguridad',
  templateUrl: 'seguridad.html',
})
export class SeguridadPage {
  public datosusuario:any=[];
  public numero_usuario:string;
  public datos:any=[];
  public clave1:any;
  public clave2:any;
  public clave3:any;
  public loading = this.Load.create({content: 'Cargado',});
  constructor(public http:HttpProvider, public alertCtrl:AlertController,public Load:LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.datos=JSON.parse(localStorage.datosuaurio);
    this.datosusuario=this.datos["datos"];
    this.numero_usuario=this.datosusuario["IDUsuario"];
    this.clave1="";
    this.clave2="";
    this.clave3="";
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
    console.log('ionViewDidLoad SeguridadPage');
  }
  update_clave(){
  if(this.clave1==""){
    this.alertinfo("","Ingresa tu contraseña");
  }else if(this.clave2==""){
    this.alertinfo("","Ingresa una contraseña");
  }else if(this.clave3==""){
    this.alertinfo("","Repite la nueva contraseña");
  }else if(this.clave2!=this.clave3){
    this.alertinfo("","La nueva contraseña no coincide con repetir contraseña");
  }else{
    this.loading.present();
    this.http.update_dateuser({"tipo":"clave","clave":this.clave1,"clave2":this.clave2,"idusuario":this.numero_usuario})
    .subscribe((resp)=>{
      this.loading.dismiss();
      if(resp["pass"]=="0"){
        this.alertinfo("",resp["mensaje"]);
        this.clave1="";
        this.clave2="";
        this.clave3="";
      }else{
        this.alertinfo("","Para finalizar cierra sesión e ingresa nuevamente.");
      }
     
      console.log(resp); 
    },(error)=>{
      console.log(error);
    })
  }
    
  }

}
