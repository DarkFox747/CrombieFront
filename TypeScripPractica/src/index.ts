//console.log("¡Hola, TypeScript!");

//ejercicio 3:
type  Ubicacion = {
    latitud: number;
    longitud: number;
};

type Direccion = {
    calle: string;
    ciudad: string;
};

type UbicacionCompleta = Ubicacion & Direccion;

const miUbicacion: UbicacionCompleta = {
    latitud: 19.4326,
    longitud: -99.1332,
    calle: "Av. Reforma",
    ciudad: "CDMX"
};

console.log(miUbicacion);

//ejercicio 4:
/*
Ejercicio 4: Alias y Funciones Genéricas
Define un alias Id que puede ser un number o un string. Luego, crea una función genérica getId que tome un parámetro id de tipo Id y devuelva un mensaje que indique el tipo del identificador (por ejemplo, "El id es numérico" o "El id es un string").

Prueba la función con diferentes tipos de Id y verifica que el mensaje sea correcto.*/
type Id = number | string;
function getId<T extends Id>(id: T): string {
    return `El id es ${typeof id}`;
}

console.log(getId(5)); // El id es number
console.log(getId("abc")); // El id es string

/*Ejercicio 5: Definir Tipos para Funciones
Define un tipo de función OperacionBinaria que tome dos parámetros de tipo number y devuelva un number. Luego, crea dos funciones suma y multiplicacion que correspondan a ese tipo de función.*/
type OperacionBinaria = (a: number, b: number) => number;
const suma: OperacionBinaria = (a, b) => a + b;
const multiplicacion: OperacionBinaria = (a, b) => a * b;

console.log(suma(5, 3)); // 8
console.log(multiplicacion(4, 2)); // 8

/*Define una función calcular que tome tres argumentos: dos números y una operación de tipo OperacionBinaria. Esta función debe devolver el resultado de aplicar la operación a los números. Prueba la función calcular con suma y multiplicacion.*/
function calcular(a: number, b: number, operacion: OperacionBinaria): number {
    return operacion(a, b);
}

console.log("funcion calcular con suma de 6+3: "+calcular(6, 3, suma)); // 9
console.log("funcion calcular con suma de 4*2: "+calcular(4, 2, multiplicacion)); // 8

/*Ejercicio 6: Interface con Index Signature
Crea una interfaz Traducciones que tenga un index signature para representar traducciones en diferentes idiomas. La clave del índice debe ser un string (idioma) y el valor otro string (traducción).
Crea un objeto traduccionesSaludo que tenga las traducciones de "Hola" en diferentes idiomas (por ejemplo, "en" para inglés, "fr" para francés, etc.). Agrega algunas traducciones y usa este objeto para acceder a una de ellas mediante su clave.
*/
interface Traducciones { [idioma: string]: string; }
const traduccionesSaludo: Traducciones = {
    en: "Hello",
    fr: "Bonjour",
    ja: "こんにちは"
};

console.log(traduccionesSaludo.en); // Hello
console.log(traduccionesSaludo.fr); // Bonjour

/*Ejercicio 7: Tipos Opcionales y Predeterminados
Define una interfaz Producto con las siguientes propiedades:
nombre (string), precio (number), descuento (number, opcional)
Luego, crea una función calcularPrecioFinal que reciba un Producto y devuelva el precio aplicando el descuento si existe.
*/

interface Producto {
    nombre: string;
    precio: number;
    descuento?: number;
}

function calcularPrecioFinal(producto: Producto): number {
    const descuento = producto.descuento ?? 0;
    return producto.precio - descuento;
}

const producto: Producto = {
    nombre: "Libro",
    precio: 20,
    descuento: 5
};  

console.log(calcularPrecioFinal(producto)); // 15

/*Ejercicio 8: Tipos Enums
Define un enum llamado RolUsuario con los valores "Admin", "Editor", y "Lector". Luego, crea una interfaz Usuario con las propiedades:
nombre (string), edad (number), rol (RolUsuario)
Crea una función mostrarPermisos que reciba un Usuario y devuelva un mensaje diferente según su rol.*/

enum RolUsuario {
    Admin = "Admin",
    Editor = "Editor",
    Lector = "Lector"
}

interface Usuario {
    nombre: string;
    edad: number;
    rol: RolUsuario;
}

function mostrarPermisos(usuario: Usuario): string {
    switch (usuario.rol) {
        case RolUsuario.Admin:
            return "Acceso total";
        case RolUsuario.Editor:
            return "Acceso a la edición";
        case RolUsuario.Lector:
            return "Acceso de solo lectura";
    }
}

const usuario: Usuario = {
    nombre: "Alice",
    edad: 25,
    rol: RolUsuario.Admin
};

const usuario2: Usuario = {
    nombre: "Bob",
    edad: 30,
    rol: RolUsuario.Editor
};

const usuario3: Usuario = {
    nombre: "Eve",
    edad: 28,
    rol: RolUsuario.Lector
};

console.log(mostrarPermisos(usuario)); // Acceso total
console.log(mostrarPermisos(usuario2)); // Acceso a la edición
console.log(mostrarPermisos(usuario3)); // Acceso de solo lectura

/*Ejercicio 9: Tuplas en TypeScript
Define un tipo Coordenadas que sea una tupla [number, number] representando latitud y longitud. Luego, crea una función mostrarUbicacion que reciba unas Coordenadas y devuelva un string formateado.*/
type Coordenadas = [number, number];

function mostrarUbicacion(coordenadas: Coordenadas): string {
    return `Latitud: ${coordenadas[0]}, Longitud: ${coordenadas[1]}`;
}

const ubicacion: Coordenadas = [19.4326, -99.1332];

console.log(mostrarUbicacion(ubicacion));

/*Ejercicio 10: Clases y Modificadores de Acceso
Crea una clase Coche con las siguientes propiedades:

marca (string, pública)
modelo (string, pública)
año (number, privada)
Un método obtenerInfo() que devuelva un string con los datos del coche.
Crea una instancia de Coche e intenta acceder a año desde fuera de la clase. ¿Qué sucede?*/
class Coche {
    constructor(public marca: string, public modelo: string, private año: number) {}

    obtenerInfo(): string {
        return `Coche: ${this.marca} ${this.modelo} (${this.año})`;
    }
}

const coche = new Coche("Toyota", "Corolla", 2020);
console.log(coche.obtenerInfo());
