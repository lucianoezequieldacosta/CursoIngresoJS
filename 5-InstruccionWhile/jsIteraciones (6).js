function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;
	while (contador <5)
	{
        contador=contador+1
        numero=prompt("ingrese numero")
        numero=parseInt(numero);
        acumulador = acumulador + numero;

	}
    while(numero <-10 || numero >10)
   {
   	numero = prompt ("Error, reingrese el numero")
   	numero = parseInt(numero);
   }
   if (numero <0)
   {
   	 negativo = negativo * numero;
   }
   else 
   {
   	acumulador= acumulador + numero;
   }
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
//parsear la suma
}//FIN DE LA FUNCIÓN