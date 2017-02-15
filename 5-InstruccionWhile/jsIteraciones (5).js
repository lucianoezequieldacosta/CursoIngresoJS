function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
    while (sexo !="f" && sexo!="m")
{
	sexo = prompt("ingrese un dato valido")
}

document.getElementById('Sexo').value=sexo;

alert("Gracias por ingresar un dato valido")

}//FIN DE LA FUNCIÓN