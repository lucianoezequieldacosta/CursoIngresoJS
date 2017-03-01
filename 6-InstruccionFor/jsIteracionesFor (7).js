function Mostrar()
{
var numAnterior; 
var numIngresado;
var acumDiv;
var numRecorrido;
var tienedivisor ="no";

numeroIngresado = prompt("Ingrese numero")
numeroIngresado = parseInt(numeroIngresado);

for (numeroRecorrido= numeroIngresado-1;(numRecorrido>2); numeroAnterior--)
{
  acumDiv=0;
  for (numAnterior=2; numAnterior <(numIngresado/2); numAnterior++)
  {

   if (numRecorrido % numAnterior ==0)
    {
      acumDiv = acumDiv + numAnterior;
      break;
    }
  }
}

if (acumDiv == numIngresado)
{
	console.log("Es perfecto " + numeroIngresado);
}


}//FIN DE LA FUNCIÓN