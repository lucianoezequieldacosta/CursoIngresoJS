function Mostrar()
{   	
	var contador=0;
    var contadorCeros = 0;
    var contadorPar =0;
	var sumaNegativo =0;
	var sumaPositivo =0;
	var contadorPositivos;
	var contadorNegativos;
	//declarar contadores y variables 
	
	var respuesta;
    while(respuesta!='fin')
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
       if (numero < 0)
       { 
       	sumaNegativo = sumaNegativo + numero;
       	contadorNegativos ++;
       }
	        else
	         {
                if(numero >0)
                {
                	sumaPositivo = sumaPositivo + numero;
                	contadorPositivos ++;
                }
                else
                {
                	contadorCeros ++;
                }
                
	         } 
	   if (numero % 2 == 0)
	   {
	   	contadorPar ++;
	   }

   	}

    var promedioNegativo = promedioNegativo / contadornegativos;
    var promediopositivo = promedioPositivo / contadorPositivos;
    var diferencia = sumaPositivo = sumaNegativo;

    document.write("La suma de los negativos es: "+sumaNegativo);






}//FIN DE LA FUNCIÓN