/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	resultado=((largo+ancho)*2)*3;

	alert(resultado);



}
function Circulo () 
{

	var radio;
	var perimetro;
	var resultado;
	radio=document.getElementById('Radio').value;

    radio=parseInt(radio);

	perimetro=((radio)*2)*3.14;

	resultado=(perimetro*3);

	alert(resultado);

}
function Materiales () 
{
	var largo;
	var ancho;
	var areapiso;
	var cemento;
	var cal;
	

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	
	areapiso=(largo*ancho);
	cemento=(areapiso*2);
	cal=(areapiso*3);

	alert("se necesitan "+ cemento + " bolsas de Cemento y "+cal+ " bolsas de cal");
}