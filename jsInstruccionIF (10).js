function Mostrar()
{
  var numeroRandom; 
  numeroRandom=Math.floor(Math.random() * 10) + 1;
  alert("El numero Random es:" + numeroRandom);	//Genero el número RANDOM entre 1 y 10 
  if ( numeroRandom >8 )
  {
  	alert("EXCELENTE")
  }
  if (numeroRandom <9 && numeroRandom >3 )
  {
  	alert("APROBÓ")
  }
  if (numeroRandom <4)
  {
  	alert("Vamos, la proxima se puede") // Bien hecho, no justificar que es del 9 al 10 porque ya estas con numeros de 1 al 10
  }
 
}//FIN DE LA FUNCIÓN