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
function mostrarBienvenida() {
    const elemento = document.getElementById("bienvenida");
    elemento.innerHTML = obtenerSaludo() + "<br>¡Bienvenid@ a Patitas Perdidas!";
}
document.addEventListener("DOMContentLoaded", function (){
    mostrarBienvenida();
});
function toggleTema() {
    const body= document.body;
    const boton = document.getElementById("btnTema");
    const icono = document.getElementById("iconoTema");

    const estdOscuro = body.classList.toggle("tema-oscuro");

    if (estdOscuro) {
        icono.className = "fa-solid fa-sun";
        boton.lastChild.textContent = "Modo claro";
    } else {
        icono.className = "fa-solid fa-moon";
        boton.lastChild.textContent = "Modo oscuro";
    }
}