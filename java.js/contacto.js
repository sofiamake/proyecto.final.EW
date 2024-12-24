function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validarFormulario() {
    let esValido = true;

   
    const nombre = document.getElementById("nombre");
    const nombreError = document.getElementById("nombre-error");
    if (nombre.value.trim() === "") {
        nombreError.textContent = "El nombre es obligatorio.";
        esValido = false;
    } else {
        nombreError.textContent = "";
    }

   
    const apellido = document.getElementById("apellido");
    const apellidoError = document.getElementById("apellido-error");
    if (apellido.value.trim() === "") {
        apellidoError.textContent = "El apellido es obligatorio.";
        esValido = false;
    } else {
        apellidoError.textContent = "";
    }

    
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    if (!validarEmail(email.value)) {
        emailError.textContent = "Por favor, ingrese un correo electrónico válido.";
        esValido = false;
    } else {
        emailError.textContent = "";
    }

 
    const mensaje = document.getElementById("mensaje");
    const mensajeError = document.getElementById("mensaje-error");
    if (mensaje.value.trim() === "") {
        mensajeError.textContent = "El mensaje es obligatorio.";
        esValido = false;
    } else {
        mensajeError.textContent = "";
    }

    return esValido; 
}
