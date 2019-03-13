import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { QueesPage } from '../quees/quees';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {  
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  quees(){
    this.navCtrl.push(QueesPage);
  }
  

}
