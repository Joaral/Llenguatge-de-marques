function procesa_envio(event)
{	
	event.preventDefault();
	console.log("procesando envío!!!");
	let nombre = document.getElementById("salida");

	let nombre = document.getElementById("nombre");
	if (nombre.value.length < 2){
		salida.value = "El nombre debe tener al menos 2 caracteres";
		nombre.style.color = "ff0000";
		salida.style.color = "ff0000";
		return false;
	}
}