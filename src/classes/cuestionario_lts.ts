import { Cuestionario } from './cuestionario';

export class CuestionariosList {
    public  lista:Cuestionario[]=[];
	constructor(){  }
	public getlist(){
        return this.lista;
    }
    public addcuestionario(cuestionario){
        this.lista.push(cuestionario);
    }
    public getpregunta(num){
    	 let result;
    	 this.lista.forEach((cuestion)=>{
            if(cuestion.Num==num){
                result=cuestion;
            }
        })
        return result;
    }
    public getrespuestajson(num){
    	let result:any[]=[];
    	 this.lista.forEach((cuestion)=>{
            if(cuestion.Num==num){
                result=JSON.parse(cuestion.Respuesta);
            }
        })
        return result;
    }

 }