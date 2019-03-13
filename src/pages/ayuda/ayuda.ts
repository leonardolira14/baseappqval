import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AyudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ayuda',
  templateUrl: 'ayuda.html',
})
export class AyudaPage {
  public items: Array<{titulo:string}>;
  public searc=[
    {titulo:"Iniciar Sesion"},{titulo:"Realizar Calificación"},{titulo:"Realizar Calificación"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.init_item();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyudaPage');
  }
  init_item(){
    this.items=this.searc
  }
  getItems(ev: any){
    this.init_item();
    const val = ev.target.value;
   
    console.log(val);
    if (val && val.trim() != '') {
      this.items =this.items.filter((item) => {
        return (item["titulo"].toLowerCase ().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.init_item();
    }
  }
}
