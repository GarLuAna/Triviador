const HEADER = document.querySelector('header');
const INTRO = document.getElementById('intro');
const PREGUNTAS = document.getElementById('preguntas');

var enJuego = false;
var player = "";
var nivel = 0;
var nivel = 0;
let pregSeleccionada;
let pregSelect;
let respCorrec;
let partida = {
    "ronda": nivel,
    "premios": 0
};

HEADER.addEventListener('click', renderIntro);

function renderIntro() {
    const HEADER = document.querySelector('header');
    const INTRO = document.getElementById('intro');
    INTRO.classList.remove('hidden');

    HEADER.style.cursor = 'default';
    HEADER.lastElementChild.setAttribute('hidden', 'hidden');
    HEADER.removeEventListener('click', renderIntro);
}

const BTN_INCIAR = document.getElementById('btn-iniciar');
BTN_INCIAR.addEventListener('click', () => {
    const NAME = document.getElementById('inp-name');
    const HEADER_P = document.querySelector('header p');

    if (NAME.value == null || NAME.value.trim().length == 0) {
        alert("Debe ingresar un nombre para continuar!");
        return false;
    }

    player = NAME.value;
    HEADER_P.innerHTML = `Player ${player}`;
    HEADER_P.removeAttribute('hidden');

    INTRO.classList.add('hidden');
    PREGUNTAS.classList.remove('hidden');
    return true;
});


const cuestionario = [
    [/*Nivel 1*/
        {
            "categoría": "Matemática",
            "pregunta": "¿Cuánto es 2+2?",
            "respuesta": "4",
            "opciones": ["4", "5", "3", "7"],
            "premio": 10
        },
        {
            "categoría": "Lengua",
            "pregunta": "La palabra VIAJAR es un...",
            "respuesta": "Verbo",
            "opciones": ["Verbo", "Adjetivo", "Sustantivo", "Antónimo"],
            "premio": 15
        },
        {
            "categoría": "Geografía",
            "pregunta": "¿En que continente está Argentina?",
            "respuesta": "América",
            "opciones": ["Africa", "América", "Europa", "Asia"],
            "premio": 12
        },
        {
            "categoría": "Ciencias Naturales",
            "pregunta": "¿Cuál es la clasificación de los animales que tienen huesos?",
            "respuesta": "Vertebrados",
            "opciones": ["Invertebrados", "Huesísticos", "Vertebrados", "Huesudos"],
            "premio": 18
        },
        {
            "categoría": "Historia",
            "pregunta": "¿Quién descubrió América?",
            "respuesta": "Colón",
            "opciones": ["Vespucio", "Colón", "Carlos I", "Francisco VI"],
            "premio": 13
        }
    ],
    [ /*Nivel 2*/
        {
            "categoría": "Matemática",
            "pregunta": "¿Cuánto es 78/3?",
            "respuesta": "26",
            "opciones": ["23", "26", "27", "25"],
            "premio": 20
        },
        {
            "categoría": "Lengua",
            "pregunta": "¿Qué tipo de palabra es DESDE?",
            "respuesta": "Preposición",
            "opciones": ["Adjetivo", "Verbo", "Adverbio", "Preposición"],
            "premio": 25
        },
        {
            "categoría": "Geografía",
            "pregunta": "¿En qué continente se encuentra Guyana Francesa?",
            "respuesta": "América",
            "opciones": ["Europa", "Asia", "América", "Oceania"],
            "premio": 23
        },
        {
            "categoría": "Ciencias Naturales",
            "pregunta": "¿Quién es la encargada de la respiración celular?",
            "respuesta": "Mitocondria",
            "opciones": ["Núcleo celular", "Pared externa", "Mitocondria", "No respiran las células"],
            "premio": 25
        },
        {
            "categoría": "Historia",
            "pregunta": "¿Cómo falleció Lady Di?",
            "respuesta": "Accidente de auto",
            "opciones": ["Asesinada", "Accidente de auto", "Causas naturales", "No murió"],
            "premio": 28
        }
    ],
    [ /*Nivel 3*/
        {
            "categoría": "Matemática",
            "pregunta": "Si y=(x+3x) - (2x+x), ¿Cuánto vale y?",
            "respuesta": "y=x",
            "opciones": ["y=x", "y=3x", "y=2x", "No hay solución"],
            "premio": 36
        },
        {
            "categoría": "Lengua",
            "pregunta": "¿Quién escribió DON QUIJOTE DE LA MANCHA?",
            "respuesta": "Cervantes",
            "opciones": ["Garcia Marquez", "Cervantes", "Coehlo", "Neruda"],
            "premio": 30
        },
        {
            "categoría": "Geografía",
            "pregunta": "¿Cuál es el gentilicio de alguien de Austria?",
            "respuesta": "Austríaco",
            "opciones": ["Austríaco", "Australiano", "Austríano", "El de Austria"],
            "premio": 32
        },
        {
            "categoría": "Ciencias Naturales",
            "pregunta": "¿Cuál de estos es un recurso renovable?",
            "respuesta": "Madera",
            "opciones": ["Carbón", "Oro", "Madera", "Petróleo"],
            "premio": 34
        },
        {
            "categoría": "Historia",
            "pregunta": "¿Cómo se llamaban al Dios Sol los Incas?",
            "respuesta": "Inti",
            "opciones": ["Ra", "Viracocha", "Inti", "Pachacamac"],
            "premio": 35
        }
    ],
    [ /*Nivel 4*/
        {
            "categoría": "Matemática",
            "pregunta": "En trigonometría,¿A qué equivale el cociente entre el cos(a) y el sen(a)?",
            "respuesta": "Cotg(a)",
            "opciones": ["cos(a)-sen(a)", "sec(a)", "Cotg(a)", "cosec(a)"],
            "premio": 46
        },
        {
            "categoría": "Lengua",
            "pregunta": "¿Cuál es una palabra esdrújula?",
            "respuesta": "Tarántula",
            "opciones": ["Tarántula", "Corazón", "Guía", "Césped"],
            "premio": 43
        },
        {
            "categoría": "Geografía",
            "pregunta": "¿Cuál es la capital de Brasil?",
            "respuesta": "Brasilia",
            "opciones": ["Rio de Janeiro", "Brasilia", "São Paulo", "Floripa"],
            "premio": 40
        },
        {
            "categoría": "Ciencias Naturales",
            "pregunta": "¿Cuál de los siguientes es un factor abiótico?",
            "respuesta": "Roca",
            "opciones": ["Iguana", "Cactus", "Roca", "Portobello"],
            "premio": 44
        },
        {
            "categoría": "Historia",
            "pregunta": "¿Cómo se llamaba el caballo de Alejandro Magno?",
            "respuesta": "Becéfalo",
            "opciones": ["Babieca", "Manengo", "Becéfalo", "Rucinante"],
            "premio": 48
        }
    ],
    [ /*Nivel 5*/
        {
            "categoría": "Matemática",
            "pregunta": "La función derivada de (x^2) es...",
            "respuesta": "2x",
            "opciones": ["x", "x^2+2", "2x", "2"],
            "premio": 58
        },
        {
            "categoría": "Lengua",
            "pregunta": "¿Cómo se escribe?",
            "respuesta": "Televisión",
            "opciones": ["Televición", "Televisión", "Telebición", "Telebisión"],
            "premio": 50
        },
        {
            "categoría": "Geografía",
            "pregunta": "¿Entre qué territorios se encuentra el estrecho de Bering?",
            "respuesta": "Alaska y Rusia",
            "opciones": ["Alaska y Rusia", "Canada y EEUU", "Marruecos y España", "Argentina y Antártida"],
            "premio": 57
        },
        {
            "categoría": "Ciencias Naturales",
            "pregunta": "¿En qué estado de la materia están más apretadas las partículas?",
            "respuesta": "Sólido",
            "opciones": ["Líquido", "Gaseoso", "Sólido", "Plasma"],
            "premio": 53
        },
        {
            "categoría": "Historia",
            "pregunta": "¿Dónde se encuentran las ruinas de Troya?",
            "respuesta": "Turquía",
            "opciones": ["Creta", "Grecia", "Turquía", "India"],
            "premio": 55
        }
    ],
];

const seleccionarPregunta = (i) => {
    preguntasPorNivel = cuestionario[i];
    seleccion = (Math.floor(0 + (Math.random() * (preguntasPorNivel.length))));
    pregSeleccionada = preguntasPorNivel[seleccion];
    return pregSeleccionada;
}

const printHTMLPregunta = (i) => {
    pregSelect = seleccionarPregunta(i);
    let ops = pregSelect.opciones;
    respCorrec = pregSelect.respuesta;
    ops = ops.sort((a, b) => Math.floor(Math.random() * ops.length) - 1);
    let htmlPreguntaCode = `<b><p>${pregSelect.pregunta}</p></b>`;
    document.getElementById('pregunta').innerHTML = htmlPreguntaCode;
    respuestas(ops);
};

function respuestas(r) {
    document.getElementById('op1').innerHTML = r[0];
    document.getElementById('op2').innerHTML = r[1];
    document.getElementById('op3').innerHTML = r[2];
    document.getElementById('op4').innerHTML = r[3];
};

function evalResp(respuesta) {
    const HEADER_P = document.querySelector('header p');
    if (respuesta == respCorrec) {
        nivel++;
        partida.premios = partida.premios + pregSeleccionada.premio;
        if (nivel < (cuestionario.length)) {
            jugar(nivel);
        } else {
            alert("SE TERMINO LA PARTIDA");
            PREGUNTAS.classList.add('hidden');
            HEADER_P.innerHTML = `<b><p>FELICITACIONES ${player}!!</p>
            <p>Tu puntaje es ${partida.premios}</p></b>`;
        };
    } else {
        alert("SE TERMINO TU PARTIDA");
        nivel = 5;
        partida.premios = 0;
        PREGUNTAS.classList.add('hidden');
        HEADER_P.innerHTML = `<b><h2>¡HAS PERDIDO!</h2></b>`;
        volverAJugar();
    };
};

function volverAJugar() {
    INTRO.classList.add('hidden');

};

function jugar(i) {
    printHTMLPregunta(i);
};

