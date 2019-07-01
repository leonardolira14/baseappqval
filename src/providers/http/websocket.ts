import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../../classes/usuario';

/*
  Generated class for the WebsocketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebsocketProvider {
  public socketstatus:boolean=false;
  public usuario:Usuario=null;
  public datosusuario:any=[];
  public nombre:string;
  public empresa:string;
  constructor(public http: HttpClient,private socket: Socket) {
    this.datosusuario=JSON.parse(localStorage.getItem("datosuaurio"));
    this.checkStatus();
  }
  checkStatus(){
    if(localStorage.getItem("datosuaurio")){
      this.nombre= this.datosusuario["datos"]["Nombre"]+" "+this.datosusuario["datos"]["Apellidos"];
      this.empresa=this.datosusuario["datos"]["IDEmpresa"]
     }else{
       this.nombre="usuario desde el home";
       this.empresa="S/N Empresa"
     }
    this.socket.on('connect',()=>{
      console.log("conectado al servidor");
      this.socketstatus=true;
      this.loginWS(this.nombre,this.empresa)
    })
    this.socket.on('disconnect',()=>{
      console.log("desconecato del servidor");
      this.socketstatus=false;
    })
  }
  emit(evento:string,payload?:any,callback?:Function){
    this.socket.emit(evento,payload,callback);
  }
  listen(evento:string){
    return this.socket.fromEvent(evento);
  }
  logout(){
    this.usuario=null;
    const payload={
      nombre:"sin-nombre"
    }
    this.emit("configurar-usuario",payload,()=>{});
  }
  loginWS(nombre:string,empresa:string){
    return new Promise((resolve,reject)=>{
      console.log("configuarar usario");
      const payload={
        nombre,
        empresa
      }
      this.emit('configurar-usuario',payload,(resp)=>{
      this.usuario=new Usuario(nombre,empresa);
          resolve();        
      })

    })
  }
  getUsuario(){
    return this.usuario;
  }

}
