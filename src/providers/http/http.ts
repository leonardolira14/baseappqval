import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  basepath="/httpapi";
  public url:any;
  constructor(public http: HttpClient,private _platform: Platform) {
    this.url='https://testqval.admyo.com/serverqval/';
    //this.url='http://localhost/serverqvalapp/';
    if(this._platform.is("cordova")){
      this.basepath="http://cors.api.com";
      
    }
    
  }
  iniciodesesion(datos){
    
    return this.http.post( this.url+'login', JSON.stringify(datos));
           
  }
  buscarrazonsocial(palabra){
   
    return this.http.post( this.url+'empresas/buscar',JSON.stringify(palabra));
  }
  solicitarcuestionariorealiza(datos){
    return this.http.post(this.url+'calificaciones/realiza',JSON.stringify(datos));
  }
  //funcion para agregar el cuestionario la servidor ya calificado
  addcuestionario(datos,cuestioonario){
    return this.http.post(this.url+'calificaciones/addcuestioario',{cuestioario:JSON.stringify(cuestioonario),datos:JSON.stringify(datos)});
  }
  download_data(datosuaurio){
    return this.http.post(this.url+"welcome/downloaddate",{datos:datosuaurio});
  }
  updata(calificaciones){
    return this.http.post(this.url+"welcome/update",{datos:calificaciones});
  }
  update_dateuser(dato){
    return this.http.post(this.url+"usuarios/updateinfo",{datos:JSON.stringify(dato)});
  }
  busca_usuario(usuario){
    return this.http.post(this.url+"calificaciones/realizaqr",{datos:JSON.stringify(usuario)});
  }
  busca_usuario_recibe(usuario){
    return this.http.post(this.url+"calificaciones/recibeapp",{datos:JSON.stringify(usuario)});
  }
}
