import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { VrealizadasPage } from '../vrealizadas/vrealizadas';
import {  VrecibidasPage } from '../vrecibidas/vrecibidas';
/**
 * Generated class for the DgofflinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dgoffline',
  templateUrl: 'dgoffline.html',
})
export class DgofflinePage {
  tbroorrealizadas=VrealizadasPage;
  tbroorrecibidas=VrecibidasPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(localStorage.offline){
      console.log(JSON.parse(localStorage.calificaciones));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DgofflinePage');
  }
  home(){
    this.navCtrl.setRoot(PrincipalPage);
  }

}
