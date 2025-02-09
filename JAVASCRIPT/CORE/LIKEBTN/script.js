let counterLinn = 0
let counterLina = 0
let counterMateo = 0

const botonLinn = document.querySelector(".btnLinn")
const botonLina = document.querySelector(".btnLina")
const botonMateo = document.querySelector(".btnMateo")
const Linn = document.querySelector(".counterLinn")
const Lina = document.querySelector(".counterLina")
const Mateo = document.querySelector(".counterMateo")

Linn.textContent = counterLinn
Lina.textContent = counterLina
Mateo.textContent = counterMateo

botonLinn.addEventListener("click", function () {
    counterLinn++;
    Linn.textContent = counterLinn;

})

botonLina.addEventListener("click", function () {
    counterLina++;
    Lina.textContent = counterLina;
})

botonMateo.addEventListener("click", function () {
    counterMateo++;
    Mateo.textContent = counterMateo;
})