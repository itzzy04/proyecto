function obtenerSaludo() {
    const hora= new Date().getHours();

    if (hora >=6 && hora < 12) {
        return "¡Buen día :)!";
    } else if (hora >=12 && hora < 20) {
        return "Buenas tardes :)";
    } else {
        return "¡Buenas noches :)!";
    }
}
function mostrarBienvenida() {
    const elemento = document.getElementById("bienvenida");
    elemento.innerHTML = obtenerSaludo() + "<br>Bienvenido/a a Patitas Perdidas";
}
document.addEventListener("DOMContentLoaded", function (){
    mostrarBienvenida();
});