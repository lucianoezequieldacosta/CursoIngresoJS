/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var PrecioFinal;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno= parseInt(preciouno);
	preciodos= parseInt(preciodos);
	preciotres= parseInt(preciotres);

	PrecioFinal = (preciouno+preciodos+preciotres);

	alert("la suma es " +PrecioFinal);
	
	
}
function Promedio () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var PrecioFinal;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno= parseInt(preciouno);
	preciodos= parseInt(preciodos);
	preciotres= parseInt(preciotres);

	PrecioFinal = (preciouno+preciodos+preciotres)/3;

	alert("el promedio es " +PrecioFinal);
	
	

	
}
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var subtotal;
	var iva;
	var PrecioFinal;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno= parseInt(preciouno);
	preciodos= parseInt(preciodos);
	preciotres= parseInt(preciotres);
	subtotal=parseInt(subtotal);
	iva=parseInt(iva);
	
	subtotal=preciouno+preciodos+preciotres;
	iva=(subtotal*21)/100;
    PrecioFinal = (subtotal+iva);

	alert("El precio final es " +PrecioFinal);
	
}