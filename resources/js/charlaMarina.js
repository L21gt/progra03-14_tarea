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

console.log("Comprobacion de que tarea 4 funciona");


// Tarea 6
separador();

for (let i = 0; i < input.length; i++) {
    // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
    for (let j = 0; j < vowels.length; j++) {
    }
  }

console.log("Comprobacion de que tarea 6 funciona");


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
console.log("Comprobacion de que tarea 7 funciona");


// Tarea 8
separador();

// Descomentar para ver el funcionamiento de Tarea 8
/*
for (let i = 0; i < input.length; i++) {
    // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]); // Añade la vocal al resultado
        console.log(`Input ${i} = "${input[i]}" es igual a vowels ${j} = "${vowels[j]}"`); // Depuración
      }
    }
  }
*/

console.log("Comprobacion de que tarea 8 funciona");


// Tarea 9
separador();

// Descomentar para ver el funcionamiento de Tarea 9
/*
for (let i = 0; i < input.length; i++) {
  // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]); // Añade la vocal al resultado
      console.log(`Input ${i} = "${input[i]}" es igual a vowels ${j} = "${vowels[j]}"`); // Depuración
      console.log(`Por lo tanto el array quedaria asi: [${resultArray}]`); // Depuración
    }
  }
}
  */

console.log("Comprobacion de que tarea 9 funciona");


// Tarea 10
separador();

// Descomentar para ver el funcionamiento de Tarea 10
/*
for (let i = 0; i < input.length; i++) {
  // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
  if (input[i] === "e") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]); // Añade la vocal al resultado
      console.log(`Input ${i} = "${input[i]}" es igual a vowels ${j} = "${vowels[j]}"`); // Depuración
      console.log(`Por lo tanto el array quedaria asi: [${resultArray}]`); // Depuración
    }
  }
}
  */

console.log("Comprobacion de que tarea 10 funciona");


// Tarea 11
separador();

// Descomentar para ver el funcionamiento de Tarea 11
/*
for (let i = 0; i < input.length; i++) {
  // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
  if (input[i] === "e") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  } else if (input[i] === "u") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]); // Añade la vocal al resultado
      console.log(`Input ${i} = "${input[i]}" es igual a vowels ${j} = "${vowels[j]}"`); // Depuración
      console.log(`Por lo tanto el array quedaria asi: [${resultArray}]`); // Depuración
    }
  }
}
*/

console.log("Comprobacion de que tarea 11 funciona");



// Tarea 12
separador();

for (let i = 0; i < input.length; i++) {
  // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
  if (input[i] === "e") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  } else if (input[i] === "u") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]); // Añade la vocal al resultado
      //console.log(`Input ${i} = "${input[i]}" es igual a vowels ${j} = "${vowels[j]}"`); // Depuración
      //console.log(`Por lo tanto el array quedaria asi: [${resultArray}]`); // Depuración
    }
  }
}

console.log(resultArray); // Muestra el resultado en la consola



// Tarea 13
separador();

for (let i = 0; i < input.length; i++) {
  // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
  if (input[i] === "e") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  } else if (input[i] === "u") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]); // Añade la vocal al resultado
      //console.log(`Input ${i} = "${input[i]}" es igual a vowels ${j} = "${vowels[j]}"`); // Depuración
      //console.log(`Por lo tanto el array quedaria asi: [${resultArray}]`); // Depuración
    }
  }
}

let resultString = (resultArray.join("").toUpperCase()); // Muestra el resultado en la consola
console.log(resultString); // Muestra el resultado en la consola


// Tarea 14
separador();

input = "Ya Doli con el padre han encontrado a su querido hijo"; //Asigna a la variable input la frase que quieras.
resultArray.length = 0; // Limpia el array resultArray

for (let i = 0; i < input.length; i++) {
  // Verificación de 'e' y 'u' (Tarea 10 y 11, las añadiremos después)
  if (input[i] === "e") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  } else if (input[i] === "u") {
    resultArray.push(input[i]); // Añade la vocal al resultado
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]); // Añade la vocal al resultado
      //console.log(`Input ${i} = "${input[i]}" es igual a vowels ${j} = "${vowels[j]}"`); // Depuración
      //console.log(`Por lo tanto el array quedaria asi: [${resultArray}]`); // Depuración
    }
  }
}

resultString = (resultArray.join("").toUpperCase()); // Asigna el resultado a una nueva variable
console.log(resultString); // Muestra el resultado en la consola


// Tarea 15
separador();  

console.log("Fin de la tarea 15 con codigo optimizado");

//Codigo de la tarea 15 implementado con IA
const vowels1 = ["a", "e", "i", "o", "u"];

function translateToMarine(text) {
  const result = [];
  for (let letter of text.toLowerCase()) {
    if (letter === 'e' || letter === 'u') {
      result.push(letter, letter);
    } else if (vowels1.includes(letter)) {
      result.push(letter);
    }
  }
  return result.join('').toUpperCase();
}

// Ejemplo de uso:
let input1 = "Trementina y tortugas";
console.log(translateToMarine(input1)); // "UUEEIEEAUUEE"

input1 = "Ya Doli con el padre han encontrado a su querido hijo";
console.log(translateToMarine(input1)); // "AOIOEEAEEAEEOAOAUUUUEEIOIO"