#pragma strict

var andarfrente: boolean;
var andartras: boolean;
var andardireita: boolean;
var andaresquerda: boolean;


var velocidade: float;

function Start () {
	velocidade = 17*Time.deltaTime;
	
}

function Update (){

	andarfrente = Input.GetKey("w");
	andartras = Input.GetKey("s");
	andardireita = Input.GetKey("d");
	andaresquerda = Input.GetKey("a");

	if(andarfrente == true){
		transform.Translate(0,0,velocidade);
	}
	else{
		if(andartras == true){
			transform.Translate(0,0,-velocidade);
		}
	}
	
	
	if(andardireita == true){
		transform.Rotate(0,5,0);
	}
	else{
		if(andaresquerda == true){
			transform.Rotate(0,-5,0);
		}
	}
	
	
		
}