document.getElementById("miFormulario").addEventListener("submit", function(event) {
	event.preventDefault(); // Evita que se envíe el formulario directamente

	let nombre = document.getElementById("nombre");
	let email = document.getElementById("email");
	let telefono = document.getElementById("telefono");

	let errorNombre = document.getElementById("errorNombre");
	let errorEmail = document.getElementById("errorEmail");
	let errorTelefono = document.getElementById("errorTelefono");

	let isValid = true;

	errorNombre.textContent = "";
	errorEmail.textContent = "";
	errorTelefono.textContent = "";

	if (nombre.value.trim().length < 2) {
		nombre.classList.add("error");
		nombre.classList.remove("success");
		errorNombre.textContent = "El nombre debe tener al menos 2 caracteres";
		isValid = false;
	} else {
		nombre.classList.add("success");
		nombre.classList.remove("error");
	}

	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!emailPattern.test(email.value.trim())) {
		email.classList.add("error");
		email.classList.remove("success");
		errorEmail.textContent = "El email no es válido";
		isValid = false;
	} else {
		email.classList.add("success");
		email.classList.remove("error");
	}

	const telefonoPattern = /^\d{9}$/;
	if (!telefonoPattern.test(telefono.value.trim())) {
		telefono.classList.add("error");
		telefono.classList.remove("success");
		errorTelefono.textContent = "El teléfono debe tener 9 dígitos";
		isValid = false;
	} else {
		telefono.classList.add("success");
		telefono.classList.remove("error");
	}

	if (isValid) {
		alert("Formulario enviado correctamente.");
		this.submit();
	}
});