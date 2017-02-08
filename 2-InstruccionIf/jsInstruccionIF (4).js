function Mostrar()
{
//tomo la edad  
    var edad;
    var resultado;
    edad=parseInt(document.getElementById('edad').value);
    if (edad <18)
    {
    	if (edad >12)
    	{
    		alert("Es un adolescente")
    	}
    }
   
    if (edad >17)
    {
    	alert("Eres un adulto")
    }

    


}//FIN DE LA FUNCIÓN