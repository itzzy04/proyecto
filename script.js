function obtenerSaludo() {
    const hora= new Date().getHours();

    if (hora >=6 && hora < 12) {
        return "Buenos días";
    } else if (hora >=12 && hora < 20) {
        return "Buenas tardes";
    } else {
        return "Buenas noches";
    }
}
//pone el saludito en el div 
function mostrarBienvenida() {
    const elemento = document.getElementById("bienvenida");
    elemento.innerHTML = obtenerSaludo() + "<br>¡Bienvenid@ a Patitas Perdidas!";
}
function toggleTema() {
    const body= document.body;
    const boton = document.getElementById("btnTema");
    const icono = document.getElementById("iconoTema");

    const estdOscuro = body.classList.toggle("tema-oscuro");

    if (estdOscuro) {
        icono.textContent = "☀️";
        boton.lastChild.textContent = "Modo claro";
    } else {
        icono.textContent = "🌙";
        boton.lastChild.textContent = "Modo oscuro";
    }
}
//VALIDACIONES
function mostrarError(idError, mensaje) {
    const span = document.getElementById(idError);
    span.textContent = mensaje;
    if (mensaje !== "") {
        span.classList.add("visible");
    } else {
        span.classList.remove("visible");
    }
}
function validarNombre() {
    const valor = document.getElementById("nombre").value.trim();
    if (valor === "") {
        mostrarError("error-nombre", "El nombre es obligatorio.");
        return false;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor)) { // el if solo permite letras, nada de números ni signos
        mostrarError("error-nombre", "El nombre solo puede contener letras.");
        return false;
    }
    mostrarError("error-nombre", "");
    return true;
}
function validarEmail() {
    const valor = document.getElementById("email").value.trim();
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor === "") {
        mostrarError("error-email", "El email es obligatorio.");
        return false;
    }
    if (!formatoEmail.test(valor)) {
        mostrarError("error-email", "Ingresa un email válido (ej: tunombre@correo.com).");
        return false;
    }
    mostrarError("error-email", "");
    return true;
}
function validarEdad() {
    const valor = document.getElementById("edad").value;
    if (valor === "") {
        mostrarError("error-edad", "La edad es obligatoria.");
        return false;
    }
    const numero = parseInt(valor);
    if (numero < 18) {
        mostrarError("error-edad", "Debes tener al menos 18 años para registrarte.");
        return false;
    }
    mostrarError("error-edad", "");
    return true;
}
function validarTerminos() {
    const marcado = document.getElementById("terminos").checked;
    if (!marcado) {
        mostrarError("error-terminos", "Debes aceptar los términos y condiciones.");
        return false;
    }
    mostrarError("error-terminos", "");
    return true;
}
//Verificar formulario
function verificarFormulario() {
    const nombreOk = document.getElementById("nombre").value.trim() !== "";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value.trim());
    const edadOk = parseInt(document.getElementById("edad").value) >= 18;
    const terminosOk = document.getElementById("terminos").checked;

    const boton = document.getElementById("btnSubmit");
    if (nombreOk && emailOk && edadOk && terminosOk) {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
}
//capitaliza el nombre para q salga con la primera en mayúscula
function arreglarNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}
function enviarFormulario() {
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const edadValida = validarEdad();
    const terminosValido = validarTerminos();

    if (nombreValido && emailValido && edadValida && terminosValido) {
        const nombre = arreglarNombre(document.getElementById("nombre").value.trim());
        const div = document.getElementById("mensajeExito");
        div.innerHTML= "¡Gracias, " + nombre + "! Tu registro fue exitoso.<br>Pronto podrás publicar a tu mascota perdida"; //innerHTML permite etiquetas html
        div.classList.add("visible");
        limpiarFormulario();
    }
}
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("terminos").checked = false;
    mostrarError("error-nombre", "");
    mostrarError("error-email", "");
    mostrarError("error-edad", "");
    mostrarError("error-terminos", "");
    document.getElementById("btnSubmit").disabled = true;
}
//EVENTOS (se ejecutan al cargar la página)
function iniciarEventos() {
    document.getElementById("nombre").addEventListener("input", function () {
        validarNombre();
        verificarFormulario();
    });
    document.getElementById("email").addEventListener("input", function () {
        validarEmail();
        verificarFormulario();
    });
    document.getElementById("edad").addEventListener("input", function () {
        validarEdad();
        verificarFormulario();
    });
    document.getElementById("terminos").addEventListener("change", function () {
        validarTerminos();
        verificarFormulario();
    });
}
//cuando termine de cargar la página, ejecuta las sgtes funciones (son para que salgan siempre!!!)
document.addEventListener("DOMContentLoaded", function (){
    mostrarBienvenida();
    iniciarEventos();
});