//PAIR PROGRAMMING
//OBJETOS
//Declaracion de variables
// let Coche = {
//     marca: "clio",
//     modelo: "yoquese",
//     matricula: "7855 KKS",
// };

// let Casa = {
//     codPostal: 11111,
//     calle: "calle Falsa, 123",
//     portal: 45,
//     piso: "9 B",
// };

// let FullStackDeveloper = {
//     lenguajes: ["C#", "Javascript", "llanto"],
//     proyectos: ["aprobar", "no llorar"],
// };

// let Perro = {
//     nombre: "Pulgas",
//     raza: "mil leches",
//     color: "indefinido",
//     edad: 999,
//     ladrar: function () {
//         console.log("waku waku!");
//     },
//     popo: function () {
//         return Math.random() * 3;
//     }
// };

// //Lectura de propiedades
// const marcaPortatil = Portatil.marca;
// const marcaPortatil2 = Portatil["marca"];
// const grupos = Concierto.grupos;
// const RGB = [Led.rojo, Led.verde, Led.azul];

// //Modificación de propiedades
// Portatil.modelo = "P345";
// Concierto.cartelera.push("Guns N' Roses");
// Concierto.fecha = new Date(Date);
// Impresora.imprimiendo = {
//     nombreArchivo: "Version finalfinal",
//     copias: 1,
//     numPaginas: 999,
// };

// //INDIVIDUAL (?)
// //OBJETOS
// //Declaración de variables
// let Noticia = {
//     titular: "Estudiante muerta por dolor de cabeza!",
//     cuerpo: "Si, en efecto, puede pasar que tralalalalalaraalaaa nos muramos por no ingerir el suficiente café. Triste pero cierto",
// };

// let Persona = {
//     nombre: "Aelin",
//     apellidos: "Ultrabadass mommy",
//     edad: 20,
// };

// let Avion = {
//     numPasajeros: 87,
//     despegar: function () {
//         console.log("despegando");
//     },
//     volar: function () {
//         console.log("llegando al destino");
//     },
//     aterrizar: function () {
//         console.log("aterrizando");
//     },
// };

// let Paquete = {
//     contenido: ["pañuelos", "paracetamol", "café"],
// };

// let Pais = {
//     numHabitantes: 23890213772489,
//     continente: "Faerûn",
//     gentilicio: "Faerûnenses",
// };

// //Lectura de propiedades
// const codError = O_Error.codigo;
// const integrantes = Grupo.integrantes;
// const nivelesTinta = Impresora.tinta;
// const pixeles = Pantalla.pixeles;
// const especificaciones = Movil["especificaciones"];

// //Modificacion de propiedades
// Grupo.numIntegrantes = 5;
// Pantalla.dimensiones = "1920x1080";

// if (Led.encendido) {
//     Led.encendido = false;
// } else {
//     Led.encendido = true;
// };

// Movil.temperatura = "20º";

let Coche = {
  marca: "renault",
  modelo: "c",
  matricula: "dhjakdkja",
};

let Casa = {
  codPostal: "89345",
  calle: "calle falsa, 123",
  portal: "10",
  piso: "7",
};

let FullStackDeveloper = {
  lenguajes: ["html", "css", "python"],
  proyectos: ["clon instagram", "ejercicios varios"],
};

let Perro = {
  nombre: "Firulais",
  raza: "mil leches",
  color: "indefinido",
  edad: "inmortal",
  ladrar: function () {
    console.log("guau");
  },
  popo: function () {
    return Math.random() * 3;
  },
};

const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil["marca"];

const grupos = Concierto.grupos;
const RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = "P345";

Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha = new Date();

Impresora.imprimiendo = {
  nombreArchivo: "equis",
  copias: 2,
  numPaginas: 483,
};

let Noticia = {
  titular: "Me estoy muriendo",
  cuerpo: "nsjkadjkaldagd",
};

let Persona = {
  nombre: "pepa",
  apellidos: "pig pig",
  edad: 423,
};

let Avion = {
  numPasajeros: 32323,
  despegar: function () {
    console.log("despegando");
  },
  volar: function () {
    console.log("llegando al destino");
  },
  aterrizar: function () {
    console.log("aterrizando");
  },
};

let Paquete = {
  contenido: ["papas", "fritas"],
};

let Pais = {
  numHabitantes: 3284,
  continente: "Salchicha",
  gentilicio: "Riconudos",
};

let codError = O_Error.codigo;
let integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta;
let pixeles = Pantalla.pixeles;
let especificaciones = Movil["especificaciones"];

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";

Led.encendido = !Led.encendido;

Movil.temperatura = "20º";
