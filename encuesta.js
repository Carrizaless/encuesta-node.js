const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creando las preguntas
let preguntas = [
    {
        Pregunta: 'Pregunta 1. ¿Cuál es tu color favorito? (escribe el color)',
        opciones: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
        tipo: 'opcion'
    },
    {
        Pregunta: 'Pregunta 2. ¿Cuántas horas dedicas al ejercicio físico cada semana?',
        opciones: [null, null, null, null],
        tipo: 'numerico'
    },
    {
        Pregunta: 'Pregunta 3. ¿Cuál es tu comida favorita?',
        opciones: ['Pizza', 'Sushi', 'Ensalada', 'Tacos'],
        tipo: 'opcion'
    }
];

// Creando variable para almacenar respuestas
let respuestas = [];


// Ejecutar encuesta 
function ejecutarEncuesta(preguntas) {
    console.log('\n ¡Bienvenido(a) a nuestra encuesta!\n');
    console.log(' Agradecemos que te tomes el tiempo para participar. Tus respuestas nos ayudarán a comprender mejor tus preferencias y mejorar nuestros servicios.');
    console.log(' La encuesta consta de 3 preguntas y solo te tomará unos minutos completarla.\n');
    console.log(' Por favor, responde cada pregunta seleccionando la opción que mejor refleje tu opinión o proporcionando la información solicitada. ¡Gracias por tu colaboración!\n');
    console.log('--- **Comencemos con la Encuesta** ---\n');

    preguntaN1(preguntas);
}

// Se realiza la pregunta 1 
function preguntaN1(preguntas) {
        
    rl.question(` ${preguntas[0].Pregunta}\n [ ] ${preguntas[0].opciones[0]}\n [ ] ${preguntas[0].opciones[0+1]}\n [ ] ${preguntas[0].opciones[0+2]}\n [ ] ${preguntas[0].opciones[0+3]}\n\n R)`,(R1) => {

        respuestas.push(R1)
            
        if ((R1 == "rojo") || (R1 == "Rojo")) {
            console.log("\n Gracias, Siguiente pregunta!\n");
            preguntaN2(preguntas)
        } else if ((R1 == "azul") || (R1 == "Azul")) {
            console.log("\n Gracias, Siguiente pregunta!\n");
            preguntaN2(preguntas)
        } else if ((R1 == "verde") || (R1 == "Verde")) {
            console.log("\n Gracias, Siguiente pregunta!\n");
            preguntaN2(preguntas)
        } else if ((R1 == "amarillo") || (R1 == "Amarillo")) {
            console.log("\n Gracias, Siguiente pregunta!\n");
            preguntaN2(preguntas)
        } else {
            console.log("\n !!  Estas colocando un color que no esta en las opciones. Intenta nuevamente  !!\n");
            preguntaN1(preguntas);
        }

    });

};

// Se realiza la pregunta 2
function preguntaN2(preguntas) {

    rl.question(` ${preguntas[1].Pregunta}\n\n R)`,(answer)=>{
        
        let R2 = Number(answer);
        respuestas.push(R2);

        if (typeof R2 === 'number' && !isNaN(R2)) {
            console.log(`\n Gracias, Siguiente pregunta!\n`)
            preguntaN3(preguntas);
        } else {
            console.log("\n!!  Estas colocando una letra. Intenta nuevamente  !!\n");
            preguntaN2(preguntas);
        };
        

    });
};

// Se realiza la pregunta 3
function preguntaN3(preguntas) {
    
    rl.question(` ${preguntas[2].Pregunta}\n [ ] ${preguntas[2].opciones[0]}\n [ ] ${preguntas[2].opciones[0+1]}\n [ ] ${preguntas[2].opciones[0+2]}\n [ ] ${preguntas[2].opciones[0+3]}\n\n R)`,(R3) => {
            
        respuestas.push(R3);

        if ((R3 == "pizza") || (R3 == "Pizza")) {
             console.log("\n Gracias, Acontinuación te muestro el resumen de la encuesta!\n");
             mostrarResumen()
        } else if ((R3 == "sushi") || (R3 == "Sushi")) {
            console.log("\n Gracias, Acontinuación te muestro el resumen de la encuesta!\n");
            mostrarResumen()
        } else if ((R3 == "ensalada") || (R3 == "Ensalada")) {
            console.log("\n Gracias, Acontinuación te muestro el resumen de la encuesta!\n");
            mostrarResumen()
        } else if ((R3 == "tacos") || (R3 == "Tacos")) {
            console.log("\n Gracias, Acontinuación te muestro el resumen de la encuesta!\n");
            mostrarResumen()
        } else {
            console.log("\n!!  Estas colocando una comida que no esta en las opciones. Intenta nuevamente  !!\n");
            preguntaN3(preguntas);
        }
        rl.close();

    });
};

// Funcion mostrar resumen de la encuesta
function mostrarResumen() {
        console.log(`\n -------------Resumen-------------\n\n *  Tu color favorito es: ${respuestas[0]}.\n\n *  Vas al gimnasio un total de: ${respuestas[1]}hr a la semana.\n\n *  Tu comida favorita es: ${respuestas[2]}.`);
};


ejecutarEncuesta(preguntas);


