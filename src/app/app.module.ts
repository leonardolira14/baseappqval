import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IngpasswordPage } from '../pages/ingpassword/ingpassword';
import { PoliticasPage } from "../pages/politicas/politicas";
import {MsjsopportePage } from "../pages/msjsopporte/msjsopporte";
import { LoginPage } from '../pages/login/login';
import { RecuperacontraPage } from '../pages/recuperacontra/recuperacontra';
import { PrincipalPage } from '../pages/principal/principal';
import { QueesPage } from '../pages/quees/quees';
import { HttpProvider } from '../providers/http/http';
import { UtilsService } from '../providers/http/servicio';
import { HttpClientModule } from '@angular/common/http';
import { RealizarcalificacionPage} from '../pages/realizarcalificacion/realizarcalificacion';
import { RecibircalificacionPage} from '../pages/recibircalificacion/recibircalificacion';
import { AmabascalificacionesPage} from '../pages/amabascalificaciones/amabascalificaciones';
import { MenuconfigPage } from '../pages/menuconfig/menuconfig';
import { MicuentaPage } from '../pages/micuenta/micuenta';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { AcercadePage } from '../pages/acercade/acercade';
import{ DgofflinePage} from '../pages/dgoffline/dgoffline';
import { SeguridadPage } from '../pages/seguridad/seguridad'
import { ResultadosbusquedaPage } from '../pages/resultadosbusqueda/resultadosbusqueda';
import { CuestionarioPage } from '../pages/cuestionario/cuestionario';
import { VrealizadasPage } from '../pages/vrealizadas/vrealizadas';
import { VrecibidasPage } from '../pages/vrecibidas/vrecibidas';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ErrorPage } from  '../pages/error/error';
import {  environment } from '../evironments/environment';
import { WebsocketProvider } from '../providers/http/websocket';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsURL, options: {} };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IngpasswordPage,
    PoliticasPage,
    MsjsopportePage,
    LoginPage,
    RecuperacontraPage,
    PrincipalPage,
    QueesPage,
    RealizarcalificacionPage,
    RecibircalificacionPage,
    AmabascalificacionesPage,
    MenuconfigPage,
    MicuentaPage,
    AyudaPage,
    AcercadePage,DgofflinePage,SeguridadPage,ResultadosbusquedaPage,CuestionarioPage,VrecibidasPage,VrealizadasPage,
    ErrorPage

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SocketIoModule.forRoot(config),
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IngpasswordPage,
    PoliticasPage,
    MsjsopportePage,
    LoginPage,
    RecuperacontraPage,
    PrincipalPage,
    QueesPage,
    RealizarcalificacionPage,
    RecibircalificacionPage,
    AmabascalificacionesPage,
    MenuconfigPage,
    MicuentaPage,
    AyudaPage,
    AcercadePage,DgofflinePage,SeguridadPage,ResultadosbusquedaPage,CuestionarioPage
    ,VrealizadasPage,VrecibidasPage,ErrorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    UtilsService,BarcodeScanner,
    WebsocketProvider,
    
  ]
})
export class AppModule {}
