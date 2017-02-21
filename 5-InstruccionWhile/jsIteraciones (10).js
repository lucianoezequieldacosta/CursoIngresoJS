function Mostrar()
{   	
	// Iteracion hasta que el usuario quiera //
   var respuesta='si';
   var nota;
   var contador =0;
   var sumadorNota =0;
   var promedioNota;
   var nombre;
   var edad;
   var sexo;
   var masViejo
   var edadmasViejo;
  
    while (respuesta=='si')
    {
      contador++;
      nota = prompt("Ingrese una nota")
      nota = parseInt(nota);

       while (nota<0 || nota>10)
        {
         nota = prompt("Ingrese una nota")
         nota = parseInt(nota);
        
        } 
    }
    nombre = prompt ("Por favor ingrese nombre");
    edad = prompt("Por favor ingrese la edad"); 
    edad = parseInt(edad);
    sumadorNota + sumadorNota + nota;
    promedioNota = sumadorNota / contador;
	respuesta= prompt("Ingrese S para continuar");
    sexo= prompt ("Por favor ingrese sexo");
     
     if (contador == 0)

     {
        masViejo = nombre;
        edadmasViejo = edad;

     }
     else     
     {
        if (edad > edadmasViejo)
        {
           elmasViejo = nombre;
           edadmasViejo = edad;
        }
     }

	document.write(promedioNota);

  
}
  /* 
  1) Cantidad de mujeres aprobadas
  2) cantidad de hombres mayores a 25 aprobados
  3) cantidad de mujeres menores a 20 años
  4) el nombre de la mujer con mejor nota
  5) el nombre del hombre con mejor nota
  6) promedio de notas de los hombres
  7) promedio de nota de las mujeres
  8) porcentajes de aprobados vs desaprobados
  9) el sexo y el nombre de la primer persona que se saque 10

   
   /*
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

}//FIN DE LA FUNCIÓN */