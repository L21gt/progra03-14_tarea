// Creacion de funcion separador de tareas
const separador = () => {
    console.log(" ");
    console.log("***************************************************");
    console.log("TAREA #: "+ tarea);
    console.log("----------------------------------------------------");
    tarea++;
}
// creacion de variable tarea
let tarea = 1;



// Tarea 1
separador();

let input;  //Crea una variable con el nombre input, para almacenar la frase que quieras.
console.log("Creacion variable input");

input = "Trementina y tortugas"; //Asigna a la variable input la frase que quieras. Por el momento Trementina y tortugas

// Tarea 2
separador();

const vowels = ["a", "e", "i", "o", "u"]; //Crea una variable con el nombre vowels, que contenga un array con las vocales.
console.log("Creacion variable vowels");

// Tarea 3
separador();

const resultArray = []; //Crea una variable con el nombre resultArray, que sea un array vacío.
console.log("Creacion variable resultArray");

// Tarea 4
separador();

// Descomentar para ver el funcionamiento de Tarea 4
/*
for (let i = 0; i < input.length; i++) { //Crea un bucle for que recorra la frase letra por letra.
    console.log(`Posicion: ${i} / Letra: ${input[i]}`);
}*/
console.log("Recorrido de la frase letra por letra");

// Tarea 5
separador();

console.log("Comprobacion de que tarea 4 funciona completada");


// Tarea 6
separador();

for (let i = 0; i < input.length; i++) {
    // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
    for (let j = 0; j < vowels.length; j++) {
    }
  }

console.log("Comprobacion de que tarea 6 funciona completada");


// Tarea 7
separador();

//Descomentar para ver el funcionamiento de Tarea 7
/*
for (let i = 0; i < input.length; i++) {
    // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
    for (let j = 0; j < vowels.length; j++) {
      console.log(`Comparando: input[${i}]="${input[i]}" vs vowels[${j}]="${vowels[j]}"`); // Depuración
    }
  }
*/
console.log("Comprobacion de que tarea 7 funciona completada");


// Tarea 8
separador();

// Descomentar para ver el funcionamiento de Tarea 8

for (let i = 0; i < input.length; i++) {
    // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]); // Añade la vocal al resultado
        console.log(`Input ${i} = "${input[i]}" es igual a vowels ${j} = "${vowels[j]}"`); // Depuración
      }
    }
  }


// Tarea 9
separador();

