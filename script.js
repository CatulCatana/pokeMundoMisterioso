// Textos de introducción
const introTextos = [
  "¡Te doy la bienvenida!",
  "Este es el portal de entrada al mundo de los Pokémon.",
  "Pero antes de dejarte entrar,\ndebo hacerte varias preguntas.",
  "Quiero que respondas con sinceridad.",
  "¿Podemos empezar?...",
  "Bien...\n¡Que empiece la entrevista!"
];
let indiceIntro = 0;

let preguntasActuales = [];
let indicePregunta = 0;
let puntajes = {};
let naturalezaGanadora = "";

let escribiendo = false;
let timeoutId = null;
let indiceCaracter = 0;
let textoActual = "";
let partesPregunta = [];
let indiceParte = 0;

// Variables de destino para la escritura (puede ser intro o preguntas)
let elementoTextoActual = null;
let elementoFlechaActual = null;

// AL CARGAR
window.onload = () => {
    bgm.pause();
    bgm.currentTime = 0;
  iniciarIntro();
};

const sfxClick = new Audio("assets/audio/sfx_select.ogg");
sfxClick.volume = 0.5;
function playClick() {
  sfxClick.currentTime = 0;
  sfxClick.play().catch(e => {});
}

const bgm = new Audio("assets/audio/bgm.ogg");
bgm.loop = true;
bgm.volume = 0.4;
function mostrarPantalla(idPantalla) {
  document.querySelectorAll('.pantalla').forEach(p => {
    p.classList.remove('activa');
    p.classList.add('oculta');
  });
  document.getElementById(idPantalla).classList.remove('oculta');
  document.getElementById(idPantalla).classList.add('activa');
}

/* -----------------------------------
   LÓGICA DE INTRODUCCIÓN
----------------------------------- */
function iniciarIntro() {
  mostrarPantalla('intro');
  indiceIntro = 0;
  elementoTextoActual = document.getElementById('introTexto');
  elementoFlechaActual = document.getElementById('introFlecha');
  escribirLineaIntro();
}

function escribirLineaIntro() {
  if (timeoutId) clearTimeout(timeoutId);
  escribiendo = true;
  elementoFlechaActual.style.display = 'none';
  
  textoActual = introTextos[indiceIntro];
  textoAcumulado = "";
  indiceCaracter = 0;
  
  elementoTextoActual.style.opacity = '1';
  elementoTextoActual.style.animation = 'none';

  escribirCaracter();
}

function avanzarIntro() {
  playClick();
  if (escribiendo) {
    clearTimeout(timeoutId);
    escribiendo = false;
    elementoTextoActual.innerHTML = textoActual;
    elementoFlechaActual.style.display = 'block';
    return;
  }

  if (!escribiendo) {
    if (indiceIntro < introTextos.length - 1) {
      indiceIntro++;
      escribirLineaIntro();
    } else {
      // Termina intro, iniciar test y mostrar canvas haciendo fade-in
      document.getElementById('glcanvas').style.display = 'block';
      setTimeout(() => {
        document.getElementById('glcanvas').style.opacity = '1';
      }, 50);
      
      iniciarTest(); // La caja sale inmediatamente mientras el fondo hace fade
    }
  }
}

/* -----------------------------------
   LÓGICA DE MÁQUINA DE ESCRIBIR
----------------------------------- */
let textoAcumulado = "";
let forzarLimpieza = false;

function escribirCaracter() {
  if (indiceCaracter < textoActual.length) {
    if (elementoTextoActual.classList.contains('texto-centrado')) {
      const visible = textoActual.substring(0, indiceCaracter + 1);
      const hidden = textoActual.substring(indiceCaracter + 1);
      elementoTextoActual.innerHTML = textoAcumulado + visible + '<span style="visibility:hidden;">' + hidden + '</span>';
    } else {
      elementoTextoActual.innerText = textoAcumulado + textoActual.substring(0, indiceCaracter + 1);
    }
    
    indiceCaracter++;
    elementoTextoActual.scrollTop = elementoTextoActual.scrollHeight;
    timeoutId = setTimeout(escribirCaracter, 25); 
  } else {
    escribiendo = false;
    textoAcumulado += textoActual;
    
    if (elementoTextoActual.classList.contains('texto-centrado')) {
      elementoTextoActual.innerHTML = textoAcumulado;
    } else {
      elementoTextoActual.innerText = textoAcumulado;
    }
    
    elementoFlechaActual.style.display = 'block';
    elementoTextoActual.scrollTop = elementoTextoActual.scrollHeight;
  }
}

/* -----------------------------------
   LÓGICA DE PREGUNTAS
----------------------------------- */
function iniciarTest() {
  preguntasActuales = getRandomQuestions();
  indicePregunta = 0;
  puntajes = {};
  for (let nat in Natures) {
    puntajes[nat] = 0;
  }
  
  mostrarPantalla('preguntas');
  bgm.play().catch(e => console.log("Autoplay bloqueado", e));
  prepararPregunta();
}

function prepararPregunta() {
  const preg = preguntasActuales[indicePregunta];
  
  document.getElementById('respuestasContainer').style.display = 'none';
  document.getElementById('flechaContinuar').style.display = 'none';
  document.getElementById('preguntaTexto').innerText = '';
  
  if (timeoutId) clearTimeout(timeoutId);

  partesPregunta = preg.q.split('\n');
  indiceParte = 0;
  
  const cajaPregunta = document.getElementById('cajaPregunta');
  cajaPregunta.onclick = avanzarDialogoPregunta;

  elementoTextoActual = document.getElementById('preguntaTexto');
  elementoFlechaActual = document.getElementById('flechaContinuar');

  escribirPartePregunta();
}

function escribirPartePregunta() {
  escribiendo = true;
  elementoFlechaActual.style.display = 'none';
  indiceCaracter = 0;
  textoActual = partesPregunta[indiceParte];
  
  if (indiceParte === 0 || forzarLimpieza) {
    textoAcumulado = "";
    if (elementoTextoActual.classList.contains('texto-centrado')) {
      elementoTextoActual.innerHTML = "";
    } else {
      elementoTextoActual.innerText = "";
    }
    forzarLimpieza = false;
  } else {
    textoAcumulado += "\n";
    if (elementoTextoActual.classList.contains('texto-centrado')) {
      // Necesitamos un \n en innerHTML, pero para que sea consistente antes de tipar el primer char:
      // Realmente en escribirCaracter se reescribirá inmediatamente.
      elementoTextoActual.innerHTML = textoAcumulado;
    } else {
      elementoTextoActual.innerText = textoAcumulado;
    }
  }
  
  escribirCaracter();
}

function avanzarDialogoPregunta() {
  playClick();
  if (escribiendo) {
    clearTimeout(timeoutId);
    textoAcumulado += textoActual; if(elementoTextoActual.classList.contains('texto-centrado')){elementoTextoActual.innerHTML = textoAcumulado;}else{elementoTextoActual.innerText = textoAcumulado;} elementoTextoActual.scrollTop = elementoTextoActual.scrollHeight;
    escribiendo = false;
    elementoFlechaActual.style.display = 'block';
    return;
  }

  if (!escribiendo) {
    if (indiceParte < partesPregunta.length - 1) {
      indiceParte++;
      escribirPartePregunta();
    } else {
      elementoFlechaActual.style.display = 'none';
      mostrarRespuestas();
    }
  }
}

function mostrarRespuestas() {
  const preg = preguntasActuales[indicePregunta];
  const listaRespuestas = document.getElementById('listaRespuestas');
  listaRespuestas.innerHTML = "";

  preg.a.forEach(resp => {
    const btn = document.createElement('button');
    btn.className = "btn-respuesta";
    btn.innerText = resp.t;
    btn.onclick = (e) => {
      playClick();
      e.stopPropagation(); 
      responder(resp.p);
    };
    listaRespuestas.appendChild(btn);
  });
  
  document.getElementById('respuestasContainer').style.display = 'block';
  document.getElementById('cajaPregunta').onclick = null;
}

function responder(puntos) {
  for (let nat in puntos) {
    if(puntajes[nat] !== undefined) {
      puntajes[nat] += puntos[nat];
    }
  }

  indicePregunta++;
  
  if (indicePregunta < preguntasActuales.length) {
    prepararPregunta();
  } else {
    calcularNaturaleza();
  }
}

/* -----------------------------------
   LÓGICA FINAL Y POKEAPI
----------------------------------- */
function calcularNaturaleza() {
  let maxPuntos = -1;
  let ganadoras = [];

  for (let nat in puntajes) {
    if (puntajes[nat] > maxPuntos) {
      maxPuntos = puntajes[nat];
      ganadoras = [nat];
    } else if (puntajes[nat] === maxPuntos) {
      ganadoras.push(nat);
    }
  }

  const ganadoraKey = ganadoras[Math.floor(Math.random() * ganadoras.length)];
  naturalezaGanadora = Natures[ganadoraKey];

  mostrarDescripcion();
}

function mostrarDescripcion() {
  // Limpiar respuestas
  document.getElementById('respuestasContainer').style.display = 'none';
  document.getElementById('flechaContinuar').style.display = 'none';
  document.getElementById('preguntaTexto').innerText = '';
  
  if (timeoutId) clearTimeout(timeoutId);

  const descripcion = DescripcionesNaturaleza[naturalezaGanadora];
  partesPregunta = descripcion.split('\n');
  partesPregunta[partesPregunta.length - 1] = "Alguien como tú es...";
  indiceParte = 0;
  
  const cajaPregunta = document.getElementById('cajaPregunta');
  cajaPregunta.onclick = avanzarDialogoDescripcion;
  
  // Cambiar a tema azul y centrar el texto
  cajaPregunta.classList.add('caja-pmd-azul');
  document.getElementById('preguntaTexto').classList.add('texto-centrado');

  elementoTextoActual = document.getElementById('preguntaTexto');
  elementoFlechaActual = document.getElementById('flechaContinuar');

  escribirPartePregunta();
}

function avanzarDialogoDescripcion() {
  playClick();
  if (escribiendo) {
    clearTimeout(timeoutId);
    textoAcumulado += textoActual; if(elementoTextoActual.classList.contains('texto-centrado')){elementoTextoActual.innerHTML = textoAcumulado;}else{elementoTextoActual.innerText = textoAcumulado;} elementoTextoActual.scrollTop = elementoTextoActual.scrollHeight;
    escribiendo = false;
    elementoFlechaActual.style.display = 'block';
    return;
  }

  if (!escribiendo) {
    if (indiceParte < partesPregunta.length - 1) {
      indiceParte++;
      escribirPartePregunta();
    } else {
      elementoFlechaActual.style.display = 'none';
      mostrarSeleccion();
    }
  }
}

function mostrarSeleccion() {
  mostrarPantalla('seleccionPokemon');
  
  const opciones = document.getElementById('pokemonOptionsContainer');
  const cajaTexto = document.getElementById('cajaSeleccionTexto');
  const textoObj = document.getElementById('seleccionTexto');
  
  opciones.style.display = 'none';
  cajaTexto.style.display = 'none';
  opciones.innerHTML = '';

  const ids = Starters[naturalezaGanadora] || Starters["Audaz"]; 
  
  Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${ids.m}`).then(r => r.json()),
    fetch(`https://pokeapi.co/api/v2/pokemon/${ids.f}`).then(r => r.json())
  ])
  .then(([poke1, poke2]) => {
    // Obtenemos los IDs con ceros a la izquierda para PMDCollab
    const pmndId1 = poke1.id.toString().padStart(4, '0');
    const portraitUrl1 = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${pmndId1}/Normal.png`;
    const pmndId2 = poke2.id.toString().padStart(4, '0');
    const portraitUrl2 = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${pmndId2}/Normal.png`;

    const card1 = document.createElement('div');
    card1.className = 'pokemon-card';
    card1.innerHTML = `
      <div class="marco-retrato">
        <img crossorigin="anonymous" src="${portraitUrl1}?v=1" alt="${poke1.name}">
      </div>
    `;
    card1.onclick = () => { playClick(); verResultadoFinal(poke1); };
    
    const card2 = document.createElement('div');
    card2.className = 'pokemon-card';
    card2.innerHTML = `
      <div class="marco-retrato">
        <img crossorigin="anonymous" src="${portraitUrl2}?v=1" alt="${poke2.name}">
      </div>
    `;
    card2.onclick = () => { playClick(); verResultadoFinal(poke2); };

    opciones.appendChild(card1);
    opciones.appendChild(card2);
    
    // Iniciar diálogo de selección (ya sin el loading molesto)
    const textoMensaje = `¡Una persona ${naturalezaGanadora}!\nHas sido bendecido con dos posibles formas.\n¿Quién quieres ser?`;
    partesPregunta = textoMensaje.split('\n');
    indiceParte = 0;
    
    cajaTexto.style.display = 'block';
    cajaTexto.onclick = avanzarDialogoSeleccion;
    
    elementoTextoActual = textoObj;
    elementoFlechaActual = document.getElementById('flechaSeleccion'); 
    
    escribirPartePregunta();
  })
  .catch(error => {
    console.error('Error al obtener Pokémon:', error);
  });
}

function avanzarDialogoSeleccion() {
  playClick();
  if (escribiendo) {
    clearTimeout(timeoutId);
    textoAcumulado += textoActual; if(elementoTextoActual.classList.contains('texto-centrado')){elementoTextoActual.innerHTML = textoAcumulado;}else{elementoTextoActual.innerText = textoAcumulado;} elementoTextoActual.scrollTop = elementoTextoActual.scrollHeight;
    escribiendo = false;
    elementoFlechaActual.style.display = 'block';
    return;
  }

  if (!escribiendo) {
    if (indiceParte < partesPregunta.length - 1) {
      indiceParte++;
      escribirPartePregunta();
    } else {
      elementoFlechaActual.style.display = 'none';
      document.getElementById('pokemonOptionsContainer').style.display = 'flex';
      document.getElementById('cajaSeleccionTexto').onclick = null; 
    }
  }
}

let pokemonElegidoFinal = "";

function verResultadoFinal(pokeData) {
  mostrarPantalla('resultados');
  
  pokemonElegidoFinal = pokeData.name.toUpperCase();
  const pmndId = pokeData.id.toString().padStart(4, '0');
  const imagen = `https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/${pmndId}/Normal.png?v=1`;

  document.getElementById('pokemonImg').src = imagen;
  
  const cajaResultados = document.getElementById('cajaResultadosTexto');
  const textoObj = document.getElementById('resultadosTexto');
  
  const textoFinal = `¡Eres el Pokémon ${pokemonElegidoFinal}!\n¡PERFECTO! ¡ya está!\n¡Sumerjámonos en el mundo de los Pokémon!\n¡Allá vamos!`;
  partesPregunta = textoFinal.split('\n');
  indiceParte = 0;
  
  cajaResultados.onclick = avanzarDialogoResultados;
  elementoTextoActual = textoObj;
  elementoFlechaActual = document.getElementById('flechaResultados'); 
  
  escribirPartePregunta();
}

function avanzarDialogoResultados() {
  playClick();
  if (escribiendo) {
    clearTimeout(timeoutId);
    textoAcumulado += textoActual; 
    
    if (elementoTextoActual.classList.contains('texto-centrado')) {
      elementoTextoActual.innerHTML = textoAcumulado;
    } else {
      elementoTextoActual.innerText = textoAcumulado;
    }
    
    elementoTextoActual.scrollTop = elementoTextoActual.scrollHeight;
    escribiendo = false;
    elementoFlechaActual.style.display = 'block';
    return;
  }

  if (!escribiendo) {
    if (indiceParte < partesPregunta.length - 1) {
      indiceParte++;
      if (indiceParte === 1) {
        forzarLimpieza = true;
      }
      escribirPartePregunta();
    } else {
      elementoFlechaActual.style.display = 'none';
      document.getElementById('cajaResultadosTexto').onclick = null; 
      
      // Pasar a pantalla de reintento con fade
      mostrarPantalla('pantallaReintento');
    }
  }
}

function reiniciarTotal() {
  playClick();
  // Limpiar variables
  indicePregunta = 0;
  puntajes = { HARDY:0, DOCILE:0, BRAVE:0, JOLLY:0, IMPISH:0, NAIVE:0, TIMID:0, HASTY:0, SASSY:0, CALM:0, RELAXED:0, LONELY:0, QUIRKY:0, MISC:0 };
  naturalezaGanadora = "";
  preguntasActuales = getRandomQuestions();
  
  // Ocultar fondo de vuelta a negro
  document.getElementById('glcanvas').style.opacity = '0';
  
  // Limpiar el tema azul
  document.getElementById('cajaPregunta').classList.remove('caja-pmd-azul');
  document.getElementById('preguntaTexto').classList.remove('texto-centrado');
  
  setTimeout(() => {
    document.getElementById('glcanvas').style.display = 'none';
    bgm.pause();
    bgm.currentTime = 0;
    iniciarIntro();
  }, 1000);
}

