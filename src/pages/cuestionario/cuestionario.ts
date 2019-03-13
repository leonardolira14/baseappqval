import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder,FormArray,FormControl } from '@angular/forms';
import { HttpProvider} from '../../providers/http/http';
import { PrincipalPage } from '../principal/principal';
import { RecibircalificacionPage } from '../recibircalificacion/recibircalificacion';
import { ErrorPage } from '../error/error';

import { CuestionariosList } from '../../classes/cuestionario_lts'
/**
 * Generated class for the CuestionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html',
})
export class CuestionarioPage {
 
  public cuestionario_lista=new CuestionariosList();

  public datos: any;
	 public cuestionarios: any;
	 public daysOptions:any;
   public frmcuestionario : FormGroup;
   public frmd:any[] = [];
   public datoscalifica:any;
   public confirmedExit: boolean = false; 
   public calificaciones:any=[];
   public upcuestionario = this.Load.create({content: 'Subiendo Cuestionario'});
  constructor(public alertCtrl: AlertController,public Load:LoadingController,private http:HttpProvider, private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.datos=JSON.parse(navParams.get("cuestionario"));
      this.datoscalifica=JSON.parse(navParams.get("datoscalifica"));
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
    //console.log(this.cuestionarios);
  }
  select_calificar(){
    if(localStorage.offline){
      this.calificar_off();
    }else{
      this.calificar();
    }
  }
  calificar_off(){
    this.frmcuestionario.value.orders.map((val,index)=>{
      let i=index;
      this.frmd.push({pregunata:this.cuestionarios[i].Num,repuesta:val});
   });
   this.calificaciones.push({datos_calificacion:this.datoscalifica,cuestionario:this.frmd});
   localStorage.setItem("calificaciones",JSON.stringify(this.calificaciones));
   console.log(localStorage.calificaciones);
   this.alertinfo("Exito!","Gracias por su Tiempo.");
          this.navCtrl.setRoot(PrincipalPage)
  }
  calificar(){
    this.upcuestionario.present();
     this.frmcuestionario.value.orders.map((val,index)=>{
       let i=index;
       this.frmd.push({pregunata:this.cuestionarios[i].Num,repuesta:val});
    });
    //ahora los envio al servidor para ser guardados
    this.http.addcuestionario(this.datoscalifica,this.frmd)
    .subscribe(res=>{
      if(res["pass"]==1){
        this.upcuestionario.dismiss();
        
        if( localStorage.ambas){
          this.navCtrl.setRoot(RecibircalificacionPage);
          this.alertinfo("Exito!","Gracias! transmitir el móvil a su cliente-proveedor");
        }else{
          this.alertinfo("Exito!","Gracias por su Tiempo.");
          this.navCtrl.setRoot(PrincipalPage)
        }
        
      }
      
    },(err)=>{
      this.upcuestionario.dismiss();
      this.navCtrl.push(ErrorPage,{error:JSON.stringify(err)})
      //this.alertinfo("Alerta",JSON.stringify(err));
    })
    
  }
  convertejson(string){
    console.log(string);
    return JSON.parse(string);
  }
}
