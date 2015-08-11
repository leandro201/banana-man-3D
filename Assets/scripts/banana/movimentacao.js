#pragma strict

var andarfrente: boolean;
var andartras: boolean;
var andardireita: boolean;
var andaresquerda: boolean;


var velocidade: float;

function Start () {
	velocidade = 10*Time.deltaTime;
	
}

function Update (){
	
	andarfrente = Input.GetKey(KeyCode.UpArrow);
	andartras = Input.GetKey(KeyCode.DownArrow);
	andardireita = Input.GetKey(KeyCode.RightArrow);
	andaresquerda = Input.GetKey(KeyCode.LeftArrow);

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