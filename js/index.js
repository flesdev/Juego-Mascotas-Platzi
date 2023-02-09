
let mascotaJugador = ""
let mascotaEnemigo = ""

let ataqueJugador
let ataqueEnemigo

let nVidasJugador = 3
let nVidasEnemigo = 3

let resultado

let sSeleccionarMascota
let sSeleccionarA
let sectionMensaje
let sectionReiniciar

/* ----------- START FUNCTION ----------- */

function iniciar(){
  /* ----------- hide sections ----------- */
  sSeleccionarA = document.getElementById("seleccionar-ataque")
  sectionMensaje = document.getElementById("mensajes")
  sectionReiniciar = document.getElementById("reiniciar")
  sSeleccionarMascota = document.getElementById("seleccionar-mascota")
  sSeleccionarA.style.display = "none"
  sectionMensaje.style.display = "none"
  sectionReiniciar.style.display = "none"

  let btnMascota = document.getElementById("btn-mascotas")
  btnMascota.addEventListener('click', () => {
    seleccionarMsctJugador()
    if(mascotaJugador != ""){
      selecMascotaEnemigo()
      sSeleccionarMascota.style.display = "none"
      sSeleccionarA.style.display = "block" // Unhide section
      seleccionarAtaqueJugador()
    }
})
}

function seleccionarAtaqueJugador(){
  const btnFuego = document.getElementById("btn-fuego")
  btnFuego.addEventListener("click", () => {
    sectionMensaje.style.display = "block" // Unhide section
    ataqueJugador = "Fuego"
    definirAtaqueEnemigo()
  })
  const btnAgua = document.getElementById("btn-agua")
  btnAgua.addEventListener("click", () => {
    sectionMensaje.style.display = "block" // Unhide section
    ataqueJugador = "Agua"
    definirAtaqueEnemigo()
  })
  const btnTierra = document.getElementById("btn-tierra")
  btnTierra.addEventListener("click", () => {
    sectionMensaje.style.display = "block" // Unhide section
    ataqueJugador = "Tierra"
    definirAtaqueEnemigo()
  })
}

function definirAtaqueEnemigo(){
  let eleccion = aleatorio(1, 3)
  switch (eleccion) {
    case 1: ataqueEnemigo = "Fuego"; break;
    case 2: ataqueEnemigo = "Agua"; break;
    case 3: ataqueEnemigo = "Tierra"; break;
  }
  resultadoJuego()
}

function resultadoJuego(){
  let texto
  if((ataqueJugador == "Fuego" && ataqueEnemigo == "Agua") || (ataqueJugador == "Agua" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Fuego")) {
    resultado = "Perdiste"
    texto = ("Tu mascota ataco con " + ataqueJugador + ", la mascota de tu enemigo, ataco con " + ataqueEnemigo + ". - " + resultado)
    crearElemento(texto)
    cambiarVidas(1, 1)
  } else if((ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua")){
    resultado = "Ganaste"
    texto = ("Tu mascota, ataco con " + ataqueJugador + ", la mascota de tu enemigo, ataco con " + ataqueEnemigo + ". " + resultado)
    crearElemento(texto)
    cambiarVidas(0, 1)
  } else {
    resultado = "Empate"
    texto = ("Tu mascota, ataco con " + ataqueJugador + ", la mascota de tu enemigo, ataco con " + ataqueEnemigo + ". " + resultado)
    crearElemento(texto)
  }
}

let pInicio = document.getElementById("mensaje1")

function crearElemento(text){
  let pId = document.getElementById("mensaje1")
  let parrafo = document.createElement("p")
  let texto = document.createTextNode(text) // innerHtml is the same
  parrafo.appendChild(texto)
  pId.appendChild(parrafo)
  pId.insertBefore(parrafo, pInicio);
  pInicio = parrafo
}

function cambiarVidas(num, suma){
  let vidasJugador = document.getElementById("vidas-jugador")
  let vidasEnemigo = document.getElementById("vidas-enemigo")
  if (num) { nVidasJugador -= suma } 
  else { nVidasEnemigo -= suma }
  vidasJugador.innerHTML = nVidasJugador
  vidasEnemigo.innerHTML = nVidasEnemigo
  if(nVidasJugador == 0){ crearMensajeFinal("Lastima, Perdiste. Vuelve a intentar") }
  else if(nVidasEnemigo == 0){crearMensajeFinal("Felicitaciones, Ganaste") }
}

function crearMensajeFinal(text){
  const pId = document.getElementById("mensaje1")
  let parrafo = document.createElement("p")
  let texto = document.createTextNode(text) // innerHtml is the same
  parrafo.appendChild(texto)
  pId.appendChild(parrafo)
  pId.insertBefore(parrafo, pInicio);
  
  sectionReiniciar.style.display = "block"
  
  let btnFuego = document.getElementById("btn-fuego")
  btnFuego.disabled = true
  let btnAgua = document.getElementById("btn-agua")
  btnAgua.disabled = true
  let btnTierra = document.getElementById("btn-tierra")
  btnTierra.disabled = true
  reiniciarJuego()
}

function reiniciarJuego(){
  let btnReinicio = document.getElementById("reiniciar")
  btnReinicio.addEventListener("click", () => {
    location.reload()
  })
}

function seleccionarMsctJugador(){
    const rdHipodoge = document.getElementById("hipodoge");
    const rdCapipepo = document.getElementById("capipepo");
    const rdRatigueya = document.getElementById("ratigueya");

    const spamMascotaJugador = document.getElementById("mascota-jugador");

    if(rdHipodoge.checked){
      spamMascotaJugador.innerHTML = "Hipodoge"
      mascotaJugador = "Hipodoge"
    } else if(rdCapipepo.checked){
      spamMascotaJugador.innerHTML = "Capipepo"
      mascotaJugador = "Capipepo"
    } else if(rdRatigueya.checked){
      spamMascotaJugador.innerHTML = "Ratigueya"
      mascotaJugador = "Ratigueya"
    } else {
      spamMascotaJugador.innerHTML = ""
    }
}

function selecMascotaEnemigo() {
  const spamMascotaEnemigo = document.getElementById("mascota-enemigo")
  let nAleatorio = aleatorio(1, 3)
  switch (nAleatorio) {
    case 1: spamMascotaEnemigo.innerHTML = "Hipodoge";
      mascotaEnemigo = "Hipodoge"
      break;
    case 2: spamMascotaEnemigo.innerHTML = "Capipepo"
      mascotaEnemigo = "Capipepo"
      break;
    case 3: spamMascotaEnemigo.innerHTML = "Ratigueya"
      mascotaEnemigo = "Ratigueya"
      break;
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciar)

/* CODIGO MEJORADO CHATGPT:
function iniciar() {
    const btnMascota = document.getElementById("btn-mascotas");
    const hipodoge = document.getElementById("hipodoge");
    const capipepo = document.getElementById("capipepo");
    const ratigueya = document.getElementById("ratigueya");
  
    btnMascota.addEventListener("click", () => {
      alert("Si funciona!");
  
      let mascota;
      switch (true) {
        case hipodoge.checked:
          mascota = "hipodoge";
          break;
        case capipepo.checked:
          mascota = "capipepo";
          break;
        case ratigueya.checked:
          mascota = "ratigueya";
          break;
        default:
          mascota = "";
      }
  
      console.log(mascota);
    });
  }
  
  window.addEventListener("load", iniciar);
  */