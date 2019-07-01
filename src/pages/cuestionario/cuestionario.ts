import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder,FormArray,FormControl } from '@angular/forms';
import { HttpProvider} from '../../providers/http/http';
import { PrincipalPage } from '../principal/principal';
import { RecibircalificacionPage } from '../recibircalificacion/recibircalificacion';
import { ErrorPage } from '../error/error';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { CuestionariosList } from '../../classes/cuestionario_lts'
import { reduce } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Camera } from '@ionic-native/camera/ngx';

@IonicPage()
@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html',
})
export class CuestionarioPage {
  @Input() rating: number=-1 ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;
  public cuestionario_lista=new CuestionariosList();
  public ruta="";
  public name="";
  public lista_archivos = [];
  public num_archvios=0;
  public datos: any;
	 public cuestionarios: any;
	 public daysOptions:any;
   public frmcuestionario : FormGroup;
   public frmd:any[] = [];
   public datoscalifica:any;
   public confirmedExit: boolean = false; 
   public calificaciones:any=[];
   public model_cuestionario: FormGroup;
   public list_Preguntas = [];
   rangecontrol = 0;
   public uparchivos = this.Load.create({content: 'Subiendo Archivos'});
   public upcuestionario = this.Load.create({content: 'Subiendo Cuestionario'});
  public hay_archvios=false;
   public uploadText:any;
   public fileTransfer:FileTransferObject;
   public url='https://qval.admyo.com/server_app/';
  public pregunta_subir:any;
   //public url='http://192.168.0.2/qval/qval_app/serverqvalapp/';
   constructor(
    private filePath:FilePath,
    private fileChooser:FileChooser,
    private camara:Camera,
    private transfer: FileTransfer, 
    private file: File,
    public alertCtrl: AlertController,
    public Load:LoadingController,
    private http:HttpProvider,
    private formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams,
     
    
    ) {
      

    this.datos=JSON.parse(navParams.get("cuestionario"));
      this.datoscalifica=JSON.parse(navParams.get("datoscalifica"));
      this.uploadText = "";
    if(localStorage.offline){
      this.cuestionarios= this.datos;
      if(localStorage.calificaciones){
        this.calificaciones=JSON.parse(localStorage.calificaciones);
      }
     
    }else{
      
      this.datos["Mensaje"].forEach((pregunta)=>{
        this.cuestionario_lista.addcuestionario(pregunta);
      })
      this.cuestionarios=this.cuestionario_lista.getlist();
    }
     const controls = this.cuestionarios.map(c => new FormControl(false));
     this.frmcuestionario=this.formBuilder.group({
      orders:new FormArray(controls)
    });
  	console.log(this.cuestionarios);
  }
  
  alertinfo(titulo,texto){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Entiendo']
    });
    alert.present();
  }
  
  
  ionViewDidLoad() {
    
  }
  select_calificar(){
    console.log(this.frmcuestionario.value.orders);
    
      if(localStorage.offline){
        this.calificar_off();
      }else{
        this.calificar();
      }
    
  }
  calificar_off(){
    let bandera=true;
    //this.upcuestionario.present();
    this.frmd=[];
    
    let tamano=Object.keys(this.frmcuestionario.value.orders).length;
    
    for(let i=0;i<=tamano-1;i++){
      
      if(this.cuestionarios[i].Obligatoria==="SI"){
        
        if(this.frmcuestionario.value.orders[i]===false || this.frmcuestionario.value.orders[i]===""){
          this.alertinfo("Error!",this.cuestionarios[i].Pregunta+" requiere de una respuesta");
          bandera=false;
          break;
        }else{
          this.frmd.push({pregunta:this.cuestionarios[i].IDPregunta,respuesta:this.frmcuestionario.value.orders[i]});
        }
      }else{
        this.frmd.push({pregunta:this.cuestionarios[i].IDPregunta,respuesta:this.frmcuestionario.value.orders[i]});
      }
    }
    console.log(bandera)
    if(bandera){
      this.calificaciones.push({datos_calificacion:this.datoscalifica,cuestionario:this.frmd});
      localStorage.setItem("calificaciones",JSON.stringify(this.calificaciones));
      console.log(localStorage.calificaciones);
      if( localStorage.ambas){
        
        this.navCtrl.setRoot(RecibircalificacionPage);
        this.alertinfo("Exito!","Gracias! transmitir el móvil a su cliente-proveedor");
      }else{
          this.alertinfo("Exito!","Gracias por su Tiempo.");
          this.navCtrl.setRoot(PrincipalPage);
      }
      
    }
   
  }
  calificar(){
    this.upcuestionario.present();
    let bandera=true;
    //this.upcuestionario.present();
    this.frmd=[];
    let tamano=Object.keys(this.frmcuestionario.value.orders).length;
    
    for(let i=0;i<=tamano-1;i++){
      
      if(this.cuestionarios[i].Obligatoria==="SI"){
        
        if(this.frmcuestionario.value.orders[i]===false || this.frmcuestionario.value.orders[i]===""){
          this.alertinfo("Error!",this.cuestionarios[i].Pregunta+" requiere de una respuesta");
          bandera=false;
          break;
        }else{
          this.frmd.push({pregunta:this.cuestionarios[i].IDPregunta,respuesta:this.frmcuestionario.value.orders[i]});
        }
      }else{
        this.frmd.push({pregunta:this.cuestionarios[i].IDPregunta,respuesta:this.frmcuestionario.value.orders[i]});
      }
    }
    console.log(bandera);
    if(bandera){
       //ahora los envio al servidor para ser guardados
        this.http.addcuestionario(this.datoscalifica,this.frmd)
        .subscribe(res=>{
          if(res["pass"]==1){
            
            
            if( localStorage.ambas){
              this.upcuestionario.dismiss();
              this.navCtrl.setRoot(RecibircalificacionPage);
              this.alertinfo("Exito!","Gracias! transmitir el móvil a su cliente-proveedor");
            }else{
                this.upcuestionario.dismiss();
                this.alertinfo("Exito!","Gracias por su Tiempo.");
                this.navCtrl.setRoot(PrincipalPage);
            }
            
          }
          
        },(err)=>{
          this.upcuestionario.dismiss();
          this.navCtrl.push(ErrorPage,{error:JSON.stringify(err)})
          //this.alertinfo("Alerta",JSON.stringify(err));
        })
    }else{
      this.upcuestionario.dismiss();
    }
    

   
    
  }
  convertejson(string){
    console.log(string);
    return JSON.parse(string);
  }
  rate(index: number,i){
    this.rating=index;
    this.ratingChange.emit(this.rating);
    this.frmcuestionario.value.orders[i]=this.rating+1;
    this.frmcuestionario.controls.orders.setValue(this.frmcuestionario.value.orders);   
  }
  getColor(index:number){
    if(this.isAboveRating(index)){
      return "#e0e0e0"
    }else{
      return "#005d8f"
    }
  }
  isAboveRating(index: number): boolean {
    return index>this.rating;
   }
   num_array(numero) {
    // tslint:disable-next-line:radix
    numero = parseInt(numero);
      const array = [];
    for (let i = 0; i < numero; i++) {
      array.push(i);
    }
    return  array;
  }
  preguntar_si_subir(name){
    this.pregunta_subir=this.alertCtrl.create({
      title:'Subir Archivo',
      message:'Subir el archivo: '+name,
      buttons:[{
        text:'Cancelar',
        handler:data=>{
          this.pregunta_subir.dismiss();
        }
      },{
        text: 'Subir',
        handler: data => {
          this.subir_archivos();
        }
      }]
    })
    this.pregunta_subir.present();
  }
  select_archivo(i){
    this.fileChooser.open().then((url)=>
    {
      this.filePath.resolveNativePath(url)
      .then((nativepath)=>{
        let fileName = nativepath.substring(nativepath.lastIndexOf("/") + 1);
        this.frmcuestionario.value.orders[i]=fileName;
     this.frmcuestionario.controls.orders.setValue(this.frmcuestionario.value.orders); 
        this.ruta=nativepath;
        this.name=fileName;
        this.preguntar_si_subir(this.name);
      },(error)=>{
        alert(JSON.stringify(error));
      })
    },(error)=>alert(JSON.stringify(error)+"error 1")
    )
  }
  respuesta_pregunta(){

  }
  subir_archivos(){
    this.uparchivos = this.Load.create({content: 'Subiendo Archivo'});
    this.uparchivos.present();
    let fileTransfer =this.transfer.create();
    var optionFile:FileUploadOptions;   
        optionFile={
          fileKey:'archivo',
          fileName:this.name,
          chunkedMode:false,
          headers:{}
        }
      fileTransfer.upload(this.ruta,this.url+"cargaarchivos",optionFile)
      .then((data)=>{
        this.uparchivos.dismiss();
      },(error)=>{
        this.uparchivos.dismiss();
        alert(JSON.stringify(error));
      })
    
  }
  cambiar_fecha(e,i,tp){
    let fecha="";
    if(tp==="F/H"){
      (e.month<10)?e.month="0"+e.month:e.month;
      (e.day<10)?e.day="0"+e.day:e.day;
      fecha=e.day+"/"+e.month+"/"+e.year+" " +e.hour+":"+e.minute;
    }
    if(tp==="FECHA"){
      (e.month<10)?e.month="0"+e.month:e.month;
      (e.day<10)?e.month="0"+e.day:e.day;
      fecha=e.day+"/"+e.month+"/"+e.year;
    }
    this.frmcuestionario.value.orders[i]=fecha;
    this.frmcuestionario.controls.orders.setValue(this.frmcuestionario.value.orders); 
  }
}
