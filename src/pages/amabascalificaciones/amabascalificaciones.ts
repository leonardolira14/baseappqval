import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal'; 
import { RealizarcalificacionPage } from '../realizarcalificacion/realizarcalificacion';

/**
 * Generated class for the AmabascalificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amabascalificaciones',
  templateUrl: 'amabascalificaciones.html',
})
export class AmabascalificacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmabascalificacionesPage');
  }
  activar_ambas(){
    localStorage.setItem("ambas","true");
    this.navCtrl.setRoot(RealizarcalificacionPage);
  }
  home(){
    this.navCtrl.setRoot(PrincipalPage);
  }
}
