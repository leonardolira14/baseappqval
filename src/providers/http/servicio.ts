import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebsocketProvider } from '../../providers/http/websocket';
import { environment } from '../../evironments/environment';
const urlserver=environment.wsURL;
@Injectable()
export class UtilsService {
    constructor(public httpM:HttpClientModule, public http: HttpClient,public wsService:WebsocketProvider)
    {

    }
    usuario_soporte(){
     
     return  this.http.get(urlserver+'/usuarios/soporte');
    }
    mensaje_soporte(de,mensaje,quien){ 
      const payload={
        de,
        cuerpo:mensaje,
        para:quien
      }
      this.wsService.emit('mensaje-para-soporte',payload);
    }
    sendMessage(mensaje){
      const payload={
        de:this.wsService.usuario.nombre,
        cuerpo:mensaje
      }
      this.wsService.emit('mensaje-soporte',payload);
    }
    getmenssages(){
      return this.wsService.listen('mensaje-nuevo');
    }
    getmessageprivate(){
      return this.wsService.listen('mensaje-desdesoporte');
    }
    getUsuariosActivos(){
      return this.wsService.listen('usuarios-activos');
    }
    emitirUsuariosActivos(){
      return this.wsService.emit('obtener-usuarios');
    }
    //esto es para mandar un sms no devulve nada masque una alerta
    enviar_sms(numero,clave,idempresa,tipo){
      this.wsService.mandar_sms(numero,clave,idempresa,tipo);
    }
    respuestasms(){
      return this.wsService.listen('respuesta-sms');
    }
 }
