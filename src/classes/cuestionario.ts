export class Cuestionario{
	public Forma:string;
	public Num:string;
	public Pregunta:string;
	public Respuesta:string;
	constructor(Forma,Num,Pregunta,Respuesta){
		this.Forma=Forma;
		this.Num=Num;
		this.Pregunta=Pregunta;
		this.Respuesta=Respuesta;
	}
}