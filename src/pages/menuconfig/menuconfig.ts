import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { PrincipalPage} from '../principal/principal';
import{ MsjsopportePage} from '../msjsopporte/msjsopporte';
import{ MicuentaPage } from '../micuenta/micuenta';
import { AyudaPage } from '../ayuda/ayuda';
import { AcercadePage } from '../acercade/acercade';
import { HttpProvider} from '../../providers/http/http';
import { SeguridadPage } from '../seguridad/seguridad'
/*
 * Generated class for the MenuconfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuconfig',
  templateUrl: 'menuconfig.html',
})
export class MenuconfigPage {
  public pagesmsconfig: Array<{titulo:string,component:any,icon:string}>;
  public offlinecheck: boolean;
  public loading = this.Load.create({content: 'Obtenenido datos',});
  public loadingup = this.Load.create({content: 'Guardando datos',});
  constructor(public alertCtrl: AlertController,public http: HttpProvider,public Load:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    
    if(localStorage.offline){
      this.offlinecheck=true;
    }else{
      this.offlinecheck=false;
    }
    this.pagesmsconfig=[
      {titulo:"Mi cuenta",component:MicuentaPage,icon:"person"},
      {titulo:"Seguridad",component:SeguridadPage,icon:"key"},
      {titulo:"Soporte Técnico",component:MsjsopportePage,icon:"headset"},
      {titulo:"Ayuda",component:AyudaPage,icon:"help"},
      {titulo:"Acerca de Qval",component:AcercadePage,icon:"ribbon"},
    ];
  }

  ionViewDidLoad() {
    
  }
  alertinfo(titulo,texto){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Entiendo']
    });
    alert.present();
  }
  activar_offline(){
    if(this.offlinecheck==true){
      localStorage.setItem("offline","ok");
      this.loading.present()
      this.http.download_data(localStorage.datosuaurio)
      .subscribe((res)=>{
       localStorage.setItem("datosoffline",JSON.stringify(res));
       this.loading.dismiss();
       this.alertinfo("","Se han descargado los datos correctamente.");
      },(err)=>{
        console.log(err);
      })

    }else{
      this.loadingup.present()
      this.http.updata(localStorage.calificaciones)
      .subscribe((res)=>{
        this.loadingup.dismiss();
        this.alertinfo("","Calificaciones Guardadas.");
        localStorage.removeItem("offline");
        localStorage.removeItem("calificaciones");
        localStorage.removeItem("datosoffline");
      },(error)=>{
        this.loadingup.dismiss();
        console.log(error)
      })
      
      
     // this.loadingup.present()
    }
    
  }
  home(){
    this.navCtrl.setRoot(PrincipalPage);

  }
  
  gotopagemsg(page){
    this.navCtrl.push(page);
  }
  

}
