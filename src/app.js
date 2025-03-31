import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function obtenerNumeroAleatorio(maximo){
  let decimalAleatorio=Math.random();
  let valor=(decimalAleatorio*10) % maximo;
  return Math.floor(valor);
}

function obtenerExcusa(){
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let aleatorioWho=obtenerNumeroAleatorio(who.length);
  let aleatorioAction=obtenerNumeroAleatorio(action.length);
  let aleatorioWhat=obtenerNumeroAleatorio(what.length);
  let aleatorioWhen=obtenerNumeroAleatorio(when.length);
  
  return `${who[aleatorioWho]} ${action[aleatorioAction]} ${what[aleatorioWhat]} ${when[aleatorioWhen]}`
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let excusa=obtenerExcusa()
  document.getElementById('excusa').innerText=excusa;
};
