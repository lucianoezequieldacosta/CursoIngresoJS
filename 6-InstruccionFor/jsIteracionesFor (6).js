function Mostrar()
{
var numeroIngresado;
var numerosPares;
var contador = 0;
var acumulador;

numeroIngresado = prompt ("Ingrese numero")
numeroIngresado = parseInt(numeroIngresado)
for (i = 1; i <=numeroIngresado; i++)
//for (i = numeroIngresado; i >1; i--)
{
  if (i%2==0)
 {
 	contador++;
 	alert(i);
 	console.log(i);
 }
  
}
alert("Total de pares: " + contador)

}//FIN DE LA FUNCIÓN