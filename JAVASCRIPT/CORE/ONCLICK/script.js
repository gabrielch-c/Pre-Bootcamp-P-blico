const inicioSesion = document.querySelector(".login")

inicioSesion.addEventListener("click", function () {
    inicioSesion.innerHTML = "Cerrar sesión";
});

const definicion = document.querySelector(".add-def")

definicion.addEventListener("click", function () {
    definicion.remove()
})

const likeCat = document.querySelector(".like-cat")
const likeDog = document.querySelector(".like-dog")

likeCat.addEventListener("click", function () {
    alert("Gato Atigrado was liked")
})

likeDog.addEventListener("click", function () {
    alert("Golden Retriever was liked")
})

let likeCounterCat = 22
const catBtn = document.querySelector(".like-cat")
const countCatElement = document.querySelector("#likeCounterCat")

countCatElement.textContent = likeCounterCat

catBtn.addEventListener("click", function () {
    likeCounterCat++;
    countCatElement.textContent = likeCounterCat;
})

let likeCounterDog = 45
const dogBtn = document.querySelector(".like-dog")
const countDogElement = document.querySelector("#likeCounterDog")

countDogElement.textContent = likeCounterDog

dogBtn.addEventListener("click", function () {
    likeCounterDog++;
    countDogElement.textContent = likeCounterDog;
})