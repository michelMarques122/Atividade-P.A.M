function calcConsumo(){

var km = document.getElementById('km').value;
var gaso = document.getElementById('gaso').value;
var modelo = document.getElementById('modelo').value;
var marca = document.getElementById('marca').value;

consumo = km / gaso;



    document.getElementById ('consumo').innerHTML = "Seu " + marca + " "+ modelo +" fez"+ consumo + "km/l";
var paragraph1 = document.getElementById("paragraph1");
var paragraph2 = document.getElementById("paragraph2");
var paragraph3 = document.getElementById("paragraph3");
var paragraph4 = document.getElementById("paragraph4");

  
  if(consumo >= 20){
  paragraph1.style.backgroundColor = "red";
  }

  else if( consumo >= 12 && consumo < 20){
  paragraph2.style.backgroundColor = "red";
  }
  
  else if( consumo >= 8 && consumo < 12){
  paragraph3.style.backgroundColor = "red";
  }
  
  else if (consumo <= 8) {
  paragraph4.style.backgroundColor = "red";
  }
  
}








