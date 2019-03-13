import { Component,ViewChild, OnInit, OnDestroy  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {  PrincipalPage} from '../principal/principal';
import { UtilsService } from '../../providers/http/servicio';
import { Observable,Subscription } from 'rxjs';
import { WebsocketProvider }from '../../providers/http/websocket'


/**
 * Generated class for the MsjsopportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msjsopporte',
  templateUrl: 'msjsopporte.html',
})


export class MsjsopportePage implements OnInit,OnDestroy {
  @ViewChild("content") content: any;
 
  public mensajes:any=[];
  public chatSuscription:Subscription;
  message: string = "";
  public da:any;
  public datosusuario:any=[];
  public usuariosActivosObs:Observable<any>;
  public idsporte:string;
  constructor(public wsServices:WebsocketProvider,public chatService:UtilsService,public navCtrl: NavController, public navParams: NavParams) {
   this.usuariosActivosObs= this.chatService.usuario_soporte();
   this.usuariosActivosObs.subscribe((respuesta)=>{
   console.log(respuesta["clientes"][0]["id"]);
    this.idsporte=respuesta["clientes"][0]["id"];
  })
  
    this.datosusuario=JSON.parse(localStorage.getItem("datosuaurio"));
    this.wsServices.loginWS(this.datosusuario["datos"]["Nombre"]+" "+this.datosusuario["datos"]["Apellidos"],this.datosusuario["datos"]["IDEmpresa"])
  }
  ngOnDestroy(){
   this.usuariosActivosObs
  }
  ngOnInit(){
    
    //this.idsporte=this.usuariosActivosObs["clientes"][0]["id"]
    
   this.chatService.getmessageprivate().subscribe(msj=>{
      this.mensajes.push(msj)
      
      //this.scrollToBottom();
    })
  }
  ionViewCanLeave() {
    
  }
  
 scrollToBottom(){
   
   var contentEnd=document.getElementById("content").scrollHeight;
   this.content.scrollTo(0,contentEnd,300);
  }
  gottoHome(){
    if(localStorage.datosuaurio){
      this.navCtrl.setRoot(PrincipalPage);
    }else{
      this.navCtrl.setRoot(HomePage);
    }
   
  }
  sendMessage(){
    if(this.message.trim().length===0){
      return;
    }
    //this.chatService.mensaje_soporte(this.message,this.)
    this.chatService.mensaje_soporte(this.wsServices.usuario.nombre,this.message,this.idsporte);
    this.message="";
  }
 
  
  
}
