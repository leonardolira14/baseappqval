import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { IngpasswordPage } from '../ingpassword/ingpassword';
import { PoliticasPage } from '../politicas/politicas';
import { MsjsopportePage } from '../msjsopporte/msjsopporte';
import { RecuperacontraPage } from '../recuperacontra/recuperacontra';
import { HttpProvider } from '../../providers/http/http';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { PrincipalPage } from '../principal/principal';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  path : string = 'http://192.168.0.3/appqval/';
  public datos : FormGroup;
  formlogin: FormData;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,public http: HttpProvider,private formBuilder: FormBuilder) {
    this.datos=this.formBuilder.group({
        correo:['',[Validators.required,Validators.email]],
        clave:['',Validators.required],
        noclose:['']
    })
    
    this.formlogin= new FormData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  alertinfo(titulo,texto){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Entiendo']
    });
    alert.present();
  }
  gototermirminos(){
    this.navCtrl.push(IngpasswordPage);
  }
  gotopoliticas(){
    this.navCtrl.push(PoliticasPage);
  }
  gotosoport(){
    this.navCtrl.setRoot(MsjsopportePage);
  }
  recuperar(){
    this.navCtrl.push(RecuperacontraPage);
  }
  logueo(){
    this.http.iniciodesesion(this.datos.value)
    .subscribe(res => {
      console.log()
     if(res["pass"]!==0){
       localStorage.setItem("datosuaurio",JSON.stringify(res));
       this.navCtrl.setRoot(PrincipalPage);
     }else{
      this.alertinfo("",res["datos"]);
     }
    }, (err) => {
      this.alertinfo("Alerta",err);
    });
  }

}
