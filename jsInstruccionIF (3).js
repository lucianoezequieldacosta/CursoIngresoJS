function Mostrar()
{
//tomo la edad  
   var edad;
   var resultado;
   edad=parseInt(document.getElementById('edad').value);
   if(edad>17)
   {
   	  alert("Eres mayor de edad")
   }
   if(edad<18)
   {
   	  alert("Eres menor de edad")    // DEBAJO DEL PRIMER IF LUEGO DEL CORCHETE IRIA ELSE{ Alert("Menor")}
   }

}//FIN DE LA FUNCIÓN