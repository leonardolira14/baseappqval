import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VrecibidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vrecibidas',
  templateUrl: 'vrecibidas.html',
})
export class VrecibidasPage {
  public calificaciones:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VrecibidasPage');
  }
  obtener_datos(num,tipo){
    
    let relaciones:any=[];
    let datos=JSON.parse(localStorage.datosoffline);
    let empresa:any=[];
    if(tipo=="realiza"){
     relaciones=datos["relaciones"][1]["realiza"];
    }else{
      relaciones=datos["relaciones"][0]["recibe"];
    }
  
    relaciones.forEach(element => {
        if(element["IDCliente"]==num){
          empresa=element
        }
    });
   return empresa;
  }
  lista(){
    if(localStorage.offline){
      let detalles=JSON.parse(localStorage.calificaciones);
      let datosempresa:any=[];
      detalles.forEach(element => {
          if(element["datos_calificacion"][0]["tipo"]=="recibe"){
            datosempresa=this.obtener_datos(element["datos_calificacion"][0]["datos_emisor"]["empresa"],"recibe");
            this.calificaciones.push({Nombre:datosempresa["Nombre"]});
          }
      });
     
    }
  }

}
