"use strict";
//console.log("¡Hola, TypeScript!");
const miUbicacion = {
    latitud: 19.4326,
    longitud: -99.1332,
    calle: "Av. Reforma",
    ciudad: "CDMX"
};
console.log(miUbicacion);
function getId(id) {
    return `El id es ${typeof id}`;
}
console.log(getId(5)); // El id es number
console.log(getId("abc")); // El id es string
const suma = (a, b) => a + b;
const multiplicacion = (a, b) => a * b;
console.log(suma(5, 3)); // 8
console.log(multiplicacion(4, 2)); // 8
/*Define una función calcular que tome tres argumentos: dos números y una operación de tipo OperacionBinaria. Esta función debe devolver el resultado de aplicar la operación a los números. Prueba la función calcular con suma y multiplicacion.*/
function calcular(a, b, operacion) {
    return operacion(a, b);
}
console.log("funcion calcular con suma de 6+3: " + calcular(6, 3, suma)); // 9
console.log("funcion calcular con suma de 4*2: " + calcular(4, 2, multiplicacion)); // 8
const traduccionesSaludo = {
    en: "Hello",
    fr: "Bonjour",
    ja: "こんにちは"
};
console.log(traduccionesSaludo.en); // Hello
console.log(traduccionesSaludo.fr); // Bonjour
function calcularPrecioFinal(producto) {
    var _a;
    const descuento = (_a = producto.descuento) !== null && _a !== void 0 ? _a : 0;
    return producto.precio - descuento;
}
const producto = {
    nombre: "Libro",
    precio: 20,
    descuento: 5
};
console.log(calcularPrecioFinal(producto)); // 15
/*Ejercicio 8: Tipos Enums
Define un enum llamado RolUsuario con los valores "Admin", "Editor", y "Lector". Luego, crea una interfaz Usuario con las propiedades:
nombre (string), edad (number), rol (RolUsuario)
Crea una función mostrarPermisos que reciba un Usuario y devuelva un mensaje diferente según su rol.*/
var RolUsuario;
(function (RolUsuario) {
    RolUsuario["Admin"] = "Admin";
    RolUsuario["Editor"] = "Editor";
    RolUsuario["Lector"] = "Lector";
})(RolUsuario || (RolUsuario = {}));
function mostrarPermisos(usuario) {
    switch (usuario.rol) {
        case RolUsuario.Admin:
            return "Acceso total";
        case RolUsuario.Editor:
            return "Acceso a la edición";
        case RolUsuario.Lector:
            return "Acceso de solo lectura";
    }
}
const usuario = {
    nombre: "Alice",
    edad: 25,
    rol: RolUsuario.Admin
};
const usuario2 = {
    nombre: "Bob",
    edad: 30,
    rol: RolUsuario.Editor
};
const usuario3 = {
    nombre: "Eve",
    edad: 28,
    rol: RolUsuario.Lector
};
console.log(mostrarPermisos(usuario)); // Acceso total
console.log(mostrarPermisos(usuario2)); // Acceso a la edición
console.log(mostrarPermisos(usuario3)); // Acceso de solo lectura
function mostrarUbicacion(coordenadas) {
    return `Latitud: ${coordenadas[0]}, Longitud: ${coordenadas[1]}`;
}
const ubicacion = [19.4326, -99.1332];
console.log(mostrarUbicacion(ubicacion));
/*Ejercicio 10: Clases y Modificadores de Acceso
Crea una clase Coche con las siguientes propiedades:

marca (string, pública)
modelo (string, pública)
año (number, privada)
Un método obtenerInfo() que devuelva un string con los datos del coche.
Crea una instancia de Coche e intenta acceder a año desde fuera de la clase. ¿Qué sucede?*/
class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerInfo() {
        return `Coche: ${this.marca} ${this.modelo} (${this.año})`;
    }
}
const coche = new Coche("Toyota", "Corolla", 2020);
console.log(coche.obtenerInfo());
