var nivel = 0;
let respCorrec;
const cuestionario = [
    [/*Nivel 1*/
        {
            "categoría": "Matemática",
            "pregunta": "¿Cuánto es 2+2?",
            "respuesta": "4",
            "opciones": ["4", "5", "3", "7"]
        },
        {
            "categoría": "Lengua",
            "pregunta": "¿Quién escribió el Quijote?",
            "respuesta": "Cervantes",
            "opciones": ["Garcia Marquez", "Cervantes", "Coehlo", "Neruda"]
        }
    ],
    [ /*Nivel 2*/
        {
            "categoría": "Geografía",
            "pregunta": "¿En qué continente se encuentra Albania?",
            "respuesta": "Europa",
            "opciones": ["Europa", "Asia", "América", "Oceania"]
        }
    ],
    [ /*Nivel 3*/
        {
            "categoría": "Geografía",
            "nivel": "2",
            "pregunta": "¿Cuál es el gentilicio de alguien de Austria?",
            "respuesta": "Austríaco",
            "opciones": ["Austríaco", "Australiano", "Austríano", "El de Austria"]
        }

    ],
    [ /*Nivel 4*/

    ],
    [ /*Nivel 5*/

    ],
];

const seleccionarPregunta = (i) => {
    preguntasPorNivel = cuestionario[i];
    seleccion = (Math.floor(0 + (Math.random() * (preguntasPorNivel.length))));
    pregSelec = preguntasPorNivel[seleccion];
    return pregSelec;
}

const printHTMLPregunta = (i) => {
    pregSelect = seleccionarPregunta(i);
    let ops = pregSelect.opciones;
    respCorrec = pregSelect.respuesta;
    ops = ops.sort((a, b) => Math.floor(Math.random() * 3) - 1);
    const htmlRespVector = ops.map(currentR => `<p><button onClick="evalResp('${currentR}')">O</button>${currentR}</p>`)
    const htmlRespuestas = htmlRespVector.join(' ');
    let htmlPreguntaCode = `<p>${pregSelect.pregunta}</p><div>${htmlRespuestas}</div>`;
    document.querySelector('.pregunta').innerHTML = htmlPreguntaCode;
}


const evalResp = respuesta => {
    if (respuesta == respCorrec) {
        alert("¡¡Iupi acertaste!!")
        nivel++;
        if (nivel < 3) {
            printHTMLPregunta(nivel);
        } else {
            alert("SE TERMINO");
        };
    } else {
        alert("Nop nop, esa no es")
    };
};

const jugar = (i) => {
    printHTMLPregunta(i);
};