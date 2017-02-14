function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) {
	case "Enero"
        alert("Este mes tiene 31 dias")
	    break;
    case "Marzo": 

    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Este mes tiene 30 o más días");
        break;
}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN