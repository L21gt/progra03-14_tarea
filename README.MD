Luis Velasquez  
Carnet 24011341  
Curso JavaScript Testing  
Tarea 14  

# Charla Marina
Observa la frase "Trementina y tortugas", ahora traducela a su equivalente en el lenguaje marino: "UUEEIEEAUUEE".

Las reglas para traducir texto al lenguaje marino es:
- No hay consonantes, solo vocales, excepto la "y".
- Las u y las e son extra largas, por lo que debemos duplicarlas en nuestro programa.
- Una vez que hemos convertido el texto al lenguaje marino, el lenguaje se canta lentamente, como es costumbre en el oceano.
- Para lograr esta traduccion, podemos utilizar nuestro conocimiento sobre bucles.

## Tarea 1:
Crea una variable con el nombre input, para almacenar la frase que quieras.

## Tarea 2:
En el mar, aparte que la vida es mas sabrosa, solo hablan con las vocales "a", "e", "i", "o" y "u". Con estas letras minusculas, crea una matriz llamada vowels. Esta matriz no se actualizara, asi que asegurate de elegir la palabra clave de declaracion adecuada.

## Tarea 3:
Crea una variable llamada resultArray y configurala como una matriz vacia: []. Esto servira como lugar para almacenar las vocales de la cadena input.

## Tarea 4:
Crea un bucle para recorrer cada letra de la variable input. En un paso posterior, compararemos cada letra con nuestra matriz vowels.

## Tarea 5:
Para comprobar tu trabajo, registra la posicion numerada del iterador dentro del bucle for y ejecuta tu codigo. Esto deberia contar la cantidad de caracteres en tu cadena input. Comenta el codigo cuando hayas comprobado su buen funcionamiento.

## Tarea 6:
Crea un bucle for anidado dentro del bucle for que acabas de escribir. Haz que el bucle interno recorra la matriz vowels cada vez que se ejecute el bucle externo.

Esto le permitira comprobar cada letra input con todos los elementos vowels durante cada iteracion.

## Tarea 7:
Para comprobar tu trabajo, registra las posiciones del numero de iteradores dentro del for bucle interno y ejecuta tu codigo. Deberias ver 0 hasta 4 repetidamente porque vowels tiene 5 elementos.

## Tarea 8:
Dentro del segundo for loop, escribe un bloque de codigo que compare las letras ingresadas en input y la matriz vowels. Para revisar que todo funcione correctamente, muestra en pantalla las coincidencias de letras.

## Tarea 9:
Ahora, en lugar de simplemente mostrar las letras, agregalas a la matriz de resultados. Para comprobar su trabajo, utiliza console.log() para mostrar resultArray. Las letras que registro en la consola en el paso 8 deberian estar incluidas en su archivo resultArray.

## Tarea 10:
En el mar se duplican las e y las u. Escribe una declaracion if que verifique si cada letra de la cadena input es igual a 'e'. Si es asi, utiliza el metodo push() para agregar input[i] a resultArray. Esta declaracion debe estar antes del bucle for interno, dentro del bucle for externo. Esto se debe a que solo desea realizar esta verificacion una vez por cada letra del input.

## Tarea 11:
A continuacion duplica la u.

## Tarea 12:
En la parte inferior del programa, registra el resultArray en la consola.

## Tarea 13:
Coloca en mayusculas la matriz resultArray y juntalos como una cadena. Declara una variable resultString que une nuestro trabajo en resultArray en una sola cadena y pone en mayusculas todas las letras.

## Tarea 14:
Ingresa la frase "Ya Doli con el padre han encontrado a su querido hijo", la traduccion deberia ser: AOIOEEAAEEOAOAUUUUEEIOIO

## Tarea 15:
Si has obtenido la respuesta, copia tu codigo en una IA y pregunta por mejoras, mejorar la legibilidad, hacerlo mas eficiente...