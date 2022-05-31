// const miTitulo = document.querySelector('h1');
// miTitulo.textContent = '¡Hola mundo!';

// querySelector() función para obtener una referencia al título y almacenarla en una variable llamada miTitulo.  Esto es muy similar a lo que hiciste con CSS usando selectores —quieres hacer algo con un elemento, así que tienes que seleccionarlo primero—.

// textContext -> Después de eso, estableciste el valor de la propiedad textContent de la variable miTitulo (que representa el contenido del título) como ¡Hola mundo!

// Curso intensivo de fundamentos del lenguaje

// Las Variables son contenedores en los que puedes almacenar valores. Primero debes declarar la variable con la palabra clave var (menos recomendado) o let, seguida del nombre que le quieras dar. Se recomienda más el uso de let que de var (más adelante se profundiza un poco sobre esto):

// let miVariable;

// Tras declarar una variable, puedes asignarle un valor:

// miVariable = 'Bob';

// Puedes hacer las dos cosas en la misma línea si lo necesitas:

// let nombreDeLaVariable = 'Bob';

// Puedes obtener el valor de la variable llamándola por su nombre:

// nombreDeLaVariable;

// Después de haberle dado un valor a la variable, puedes volver a cambiarlo:

// let nombreDeLaVariable = 'Bob';
// nombreDeLaVariable = 'Steve';


// Las variables sus tipos de datos:

// Variable con tipo de dato String
// let miVariable = 'Bob';

// Variable con tipo de dato Number
// let mivariable1 = 10;

// Variable con tipo de dato Boolean
// let mivariable2 = true;

// Variable con tipo da dato Array
// let mivariable3 = [1, 'Bob', 'Steve', 10];

// Variable de tipo de Object (Objeto)
// let miVariable4 = document.querySelector('h1');



// Comentarios

// En Javascript puedes escribir comentarios al igual que en CSS. Comentario de una sola línea: 

// Esto es un comentario


// Pero también puedes escribir comentarios en más de una línea, igual que en CSS:

/*
Esto es un comentario
de varias líneas. 
*/


// Operadores

// Suma/concatena
suma = 6 + 9;
contanecacion = "Hola " + "mundo!";

console.log(suma);
console.log(contanecacion);

// Resta, multiplicación, división
resta = 9 - 3;
multiplicacion = 8 * 2; // La multiplicación en JS es un asterisco
division = 9 / 3;

console.log(resta);
console.log(multiplicacion);
console.log(division);

// Operador de asignación
let miVariableAsignacion = 'Bob';

console.log(miVariableAsignacion);

// identidad/igualdad	
/* let miVariableIgualdad = 3;
miVariable === 4;

console.log(miVariableIgualdad);
console.log(miVariable);
*/

// Negación, distinto (no igual)
/* let miVariableNegación = 3;
!miVariable === 3;
console.log(miVariableNegación);

let miVariableDistinto = 3;
miVariable !== 3;
*/ 

// Condicionales: 
// Las condicionales son estructuras de código que permiten comprobar si una expresión devuelve true o no, y después ejecuta un código diferente dependiendo del resultado.

/*
let helado = 'fresa';
if(helado === 'chocolate') {
    alert('¡Sí, amo el helado de chocolate!');
} else {
    alert('Awwww, pero mi favorito es el chocolate...');
}
*/


// Funciones:
// Las funciones son una manera de encapsular una funcionalidad que quieres reutilizar, de manera que puedes llamar esa función con un solo nombre, y no tendrás que escribir el código entero cada vez que la utilices. Ya has visto algunas funciones más arriba, por ejemplo:

/*
let nombreDeLaVariable = document.querySelector('h1');
alert('¡Hola!');
*/
// Estas funciones están integradas en el navegador para poder utilizarlas en cualquier momento.

// Podemos definir nuestras propias funciones
// Esta es una función simple que toma dos números como argumentos y los multiplica entre sí—:

/*
function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
*/

// Trata de ejecutar la función anterior en la consola. Después trata de usar la nueva función algunas veces, p.ej:

/*
console.log(multiplica(3, 4));
console.log(multiplica(4, 7));
console.log(multiplica(20, 20));
console.log(multiplica(0.5, 3));
*/

// return le dice al navegador que devuelva la variable resultado fuera de la función, para que esté disponible para su uso. Porque las variables definidas dentro de funciones, solo están disponibles dentro de esas funciones. Esto se conoce como ámbito de la variable.


// Eventos
// Para crear una interacción real en tu sitio web, debes usar eventos. Estos son unas estructuras de código que captan lo que sucede en el navegador, y permite que en respuesta a las acciones que suceden se ejecute un código.

/*
document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}
*/

// Hay muchas maneras de enlazar un evento a un elemento; aquí hemos seleccionado el elemento <html> y le asignamos a su propiedad onclick una función anónima (función sin nombre) que contiene el código que se ejecutará cuando el evento suceda.

// Nota que
// document.querySelector('html').onclick = function(){};

// es equivalente a
/*
let miHTML = document.querySelector('html');
miHTML.onclick = function(){
    alert('¡Ouch!')
};
*/
// es solo un modo más corto de escribirlo.



// ## Sobrecargar tu sitio web de ejemplo

// $ Añadir un cambiador de imagen
let miImage = document.querySelector('img'); // obtiene referencia del elemento y lo guarda en una variable
miImage.onclick = function() { // variable se le asigna una del elemento
    let miSrc = miImage.getAttribute('src'); // recupera u obtiene el valor del atributo src
    if (miSrc === 'https://www.elespectador.com/resizer/SCJ7Cb2kaD_u2LoCQxHcBVTfA6I=/1200x675/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/T2REW657GVA7RNQMDTDLMFZ6TM.jpg') { // si el valor src coincide con la ruta ejecuta siguiente línea
        miImage.setAttribute('src', '/assets/images/aspect-aiguille-if--500x350-ES.jpg');
    } else {
        miImage.setAttribute('src', 'https://www.elespectador.com/resizer/SCJ7Cb2kaD_u2LoCQxHcBVTfA6I=/1200x675/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/T2REW657GVA7RNQMDTDLMFZ6TM.jpg');
    }  
}


// $ Añadir un mensaje de bienvenida personalizado

// let miBoton = document.querySelector('button');
// let miTitulo = document.querySelector('h1');


// function estableceNombreUsuario() {
//     debugger;
//     let miNombre = prompt('Por favor, ingresa tu nombre.');
//     localStorage.setItem('nombre', miNombre);
//     miTitulo.textContent = 'Mozilla es genial, ' + miNombre;
    
// }

// La primera línea de este bloque usa el operador de negación (NO lógico representado por !) para comprobar si el elemento 'nombre' existe. Si no existe, la función estableceNombreUsuario() se iniciará para crearlo.
/* if (!localStorage.getItem('nombre')) {
    debugger;
    estableceNombreUsuario();
}
else {
    // Si ya existe (como por ejemplo cuando el usuario ya ingresó al sitio), se recupera el dato del nombre usando getItem() y se fija mediante textContent del título a la cadena, más el nombre del usuario, como hiciste dentro de estableceNombreUsuario().
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}
*/

// el evento onclick que manipulará el botón, de modo que cuando sea pulsado se inicie la función estableceNombreUsuario(). Esto permitirá al usuario establecer un nuevo nombre cada vez que lo desee al pulsar el botón:
/* miBoton.onclick = function() {
    debugger;
    estableceNombreUsuario();
}
*/

// ¿Un nombre de usuario nulo?

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    // debugger;
    let miNombre = prompt('Introduzca su nombre');
    if (!miNombre) { // significa que si miNombre no tiene valor, ejecute estableceNombreUsuario() de nuevo desde el principio
        estableceNombreUsuario();
    } else { // Si tiene un valor (si la afirmación anterior no es verdadera), entonces almacene el valor en localStorage y establézcalo como el texto del título.
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
}

if (!localStorage.getItem('nombre')) {
    debugger;
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    // debugger;
    estableceNombreUsuario();
}




