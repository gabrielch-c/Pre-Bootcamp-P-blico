var botones = document.querySelectorAll(".btn");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        boton.style.color = "white";
        boton.style.backgroundColor = "red";
        boton.innerHTML = "No Disponible";
    });
});

var iniciosesion = document.querySelector(".login");

iniciosesion.addEventListener("click", function () {
    alert("Inicio de sesión exitoso");
});

var ficcion = document.querySelector(".ficcion");
var historico = document.querySelector(".historico");
var tecno = document.querySelector(".tecno");
var aa = document.querySelector(".aa");
var poesia = document.querySelector(".poesia");
var info = document.querySelector(".info");

ficcion.addEventListener("click", function () {
    info.innerText = "Ficción";
});

historico.addEventListener("click", function () {
    info.innerText = "Histórico";
});

tecno.addEventListener("click", function () {
    info.innerText = "Tecnología";
});

aa.addEventListener("click", function () {
    info.innerText = "Autoayuda";
});

poesia.addEventListener("click", function () {
    info.innerText = "Poesía";
});