function Mostrar()
{

var numeroIngresado;
var numeroanterior;
var tieneDivisor;
var numeroRecorrido;

numeroIngresado = prompt("Ingrese numero")
numeroIngresado = parseInt(numeroIngresado)


for (numRecorrido= numeroIngresado-1; numeroRecorrido>2; numeroRecorrido--)
{	
   tieneDivisor="no";
   for (numeroanterior=2; numeroanterior<(numeroRecorrido/2); numeroanterior++)
  {

   if(numeroRecorrido % numeroanterior ==0)
     
    {
    	tieneDivisor="si"
    	break;
    }
  }

 }

  if (tieneDivisor=="no")
    {
        console.log("Es primo" + numeroRecorrido);
    }



}  //FIN DE LA FUNCIÓN

/* 
 FOR (numeroanterior=2, numeroanterior < numeroingresado, numeroanterior++)

 IF (7 % 5 == 0) IF (numeroingresado % numeroanterior ==0)
{
	alert("Es divisor");
	tieneDivisor="si" */

