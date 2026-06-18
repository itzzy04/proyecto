function obtenerSaludo() {
    const hora= new Date().getHours();

    if (hora >=6 && hora < 12) {
        return "¡Buen día :)!";
    } else if (hora >=12 && hora < 19) {
        return "Buenas tardes :)";
    } else {
        return "¡Buenas noches :)!";
    }
}
function mostrarBienvenida() {
    const elemento = document.getElementById("bienvenida");
    elemento.textContent = obtenerSaludo() + "Bienvenido/a a Patitas Perdidas";
}
document.addEventListener("DOMContentLoaded", function (){
    mostrarBienvenida;
});