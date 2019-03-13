import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { RealizarcalificacionPage } from '../pages/realizarcalificacion/realizarcalificacion';
import { RecibircalificacionPage } from '../pages/recibircalificacion/recibircalificacion';
import { DgofflinePage} from '../pages/dgoffline/dgoffline';
import{ PrincipalPage } from '../pages/principal/principal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav : Nav;
  public rootPage:any;
  public pages: Array<{titulo:string,component:any,icon:string}>;
 private platform: Platform;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.platform=platform;
    
    
    this.pages=[
      {titulo:"Realizar Calificación",component:RealizarcalificacionPage,icon:"star"},
      {titulo:"Recibir Calificación",component:RecibircalificacionPage,icon:"thumbs-up"},
      //{titulo:"Recibir/Realizar Calificación",component:AmabascalificacionesPage,icon:"pricetag"},
      {titulo:"Calificaciones offline",component:DgofflinePage,icon:"paper"},

    ];
    
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
      if(localStorage.datosuaurio){
      this.gotopage(PrincipalPage);
      }else{
        this.gotopage(HomePage);
      }
    });

  }
  
  gotopage(page){
    this.nav.setRoot(page);
  }
  cerrarapp(){
     this.platform.exitApp();
  }
  cerrarsesion(){
    localStorage.clear();
    this.nav.setRoot(HomePage);
  }
}

