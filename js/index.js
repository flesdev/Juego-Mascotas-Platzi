
let mascotaJugador = ""
let mascotaEnemigo = ""

let ataqueJugador
let ataqueEnemigo

let nVidasJugador = 3
let nVidasEnemigo = 3

let resultado

const sSeleccionarMascota = document.getElementById("seleccionar-mascota")
const sSeleccionarA = document.getElementById("seleccionar-ataque")
const sectionMensaje = document.getElementById("mensajes")
const sectionReiniciar = document.getElementById("reiniciar")
const btnMascota = document.getElementById("btn-mascotas") // Boton de inicio
/* Radio Input of pets */
const rdHipodoge = document.getElementById("hipodoge");
const rdCapipepo = document.getElementById("capipepo");
const rdRatigueya = document.getElementById("ratigueya");
/* span's for change text */
const spamMascotaJugador = document.getElementById("mascota-jugador")
const spamMascotaEnemigo = document.getElementById("mascota-enemigo")
/* atacks buttons */
const btnFuego = document.getElementById("btn-fuego")
const btnAgua = document.getElementById("btn-agua")
const btnTierra = document.getElementById("btn-tierra")
/* span's for count life */
const vidasJugador = document.getElementById("vidas-jugador")
const vidasEnemigo = document.getElementById("vidas-enemigo")
/* reload button */
const btnReinicio = document.getElementById("reiniciar")

/* ----------- START FUNCTION ----------- */
function iniciar(){
  /* ----------- hide sections ----------- */
  sSeleccionarA.style.display = "none"
  sectionMensaje.style.display = "none"
  sectionReiniciar.style.display = "none"

  btnMascota.addEventListener('click', () => {
    seleccionarMsctJugador()
    if(mascotaJugador != ""){
      selecMascotaEnemigo()
      sSeleccionarMascota.style.display = "none" // Hide section
      sSeleccionarA.style.display = "block" // Unhide section
      sectionMensaje.style.display = "block" // Unhide section
      seleccionarAtaqueJugador()
    }
})
}

function seleccionarAtaqueJugador(){
  btnFuego.addEventListener("click", () => {
    ataqueJugador = "Fuego"
    definirAtaqueEnemigo()
  })
  btnAgua.addEventListener("click", () => {
    ataqueJugador = "Agua"
    definirAtaqueEnemigo()
  })
  btnTierra.addEventListener("click", () => {
    ataqueJugador = "Tierra"
    definirAtaqueEnemigo()
  })
}

function definirAtaqueEnemigo(){
  switch (aleatorio(1, 3)) {
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
    cambiarVidas(false)
  } else if((ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua")){
    resultado = "Ganaste"
    texto = ("Tu mascota, ataco con " + ataqueJugador + ", la mascota de tu enemigo, ataco con " + ataqueEnemigo + ". " + resultado)
    crearElemento(texto)
    cambiarVidas(true)
  } else {
    resultado = "Empate"
    texto = ("Tu mascota, ataco con " + ataqueJugador + ", la mascota de tu enemigo, ataco con " + ataqueEnemigo + ". " + resultado)
    crearElemento(texto)
  }
}

let pInicio = document.getElementById("mensaje1")
const pId = document.getElementById("mensajes")

function crearElemento(txt){
  let parrafo = document.createElement("p")
  let texto = document.createTextNode(txt)
  parrafo.appendChild(texto)
  pId.appendChild(parrafo)
  pId.insertBefore(parrafo, pInicio)
  pInicio = parrafo
}

function cambiarVidas(key){
  if (key) { nVidasEnemigo--
    vidasEnemigo.innerHTML = nVidasEnemigo } 
  else { nVidasJugador -- 
    vidasJugador.innerHTML = nVidasJugador }
  
  if(nVidasJugador == 0){ crearMensajeFinal("Lastima, Perdiste. Vuelve a intentar") }
  else if(nVidasEnemigo == 0){crearMensajeFinal("Felicitaciones, Ganaste") }
}

function crearMensajeFinal(text){
  let parrafo = document.createElement("p")
  let texto = document.createTextNode(text) // innerHtml is the same
  parrafo.appendChild(texto)
  pId.appendChild(parrafo)
  pId.insertBefore(parrafo, pInicio);
  
  sectionReiniciar.style.display = "block"
  
  btnFuego.disabled = true
  btnAgua.disabled = true
  btnTierra.disabled = true
  reiniciarJuego()
}

function reiniciarJuego(){
  btnReinicio.addEventListener("click", () => {
    location.reload()
  })
}

function seleccionarMsctJugador(){
    if(rdHipodoge.checked){
      spamMascotaJugador.innerHTML = "Hipodoge" // Cambiar el texto
      mascotaJugador = "Hipodoge"
    } else if(rdCapipepo.checked){
      spamMascotaJugador.innerHTML = "Capipepo" // Cambiar el texto
      mascotaJugador = "Capipepo"
    } else if(rdRatigueya.checked){
      spamMascotaJugador.innerHTML = "Ratigueya" // Cambiar el texto
      mascotaJugador = "Ratigueya"
    } else {
      spamMascotaJugador.innerHTML = ""
    }
}

function selecMascotaEnemigo() {
  switch (aleatorio(1, 3)) {
    case 1: spamMascotaEnemigo.innerHTML = "Hipodoge"; mascotaEnemigo = "Hipodoge"; break;
    case 2: spamMascotaEnemigo.innerHTML = "Capipepo"; mascotaEnemigo = "Capipepo"; break;
    case 3: spamMascotaEnemigo.innerHTML = "Ratigueya"; mascotaEnemigo = "Ratigueya"; break;
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