const body = document.getElementById("body")
const boton = document.getElementById("header")
const modoOscuro = document.getElementById("modo-oscuro")
const modoClaro = document.getElementById("modo-claro")


boton.onclick = () => {
    body.classList.toggle("oscuro")
}

modoClaro.onclick = () => {
    modoOscuro.classList.remove("nomostrar")
    modoClaro.classList.add("nomostrar")
}

modoOscuro.onclick = () => {
    modoOscuro.classList.add("nomostrar")
    modoClaro.classList.remove("nomostrar")
}