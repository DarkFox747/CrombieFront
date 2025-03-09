/*Ejercicio 1: Extensión de Interfaces
Define una interfaz Animal con propiedades básicas como nombre (string) y edad (number). Luego, crea otra interfaz Perro que extienda de Animal y agrega propiedades específicas de los perros, como raza (string) y adiestrado (boolean).

Finalmente, crea un objeto miPerro de tipo Perro y asigna valores a todas sus propiedades.*/
interface Animal {
    nombre: string;
    edad: number;
}

interface Perro extends Animal {
    raza: string;
    adiestrado: boolean;
}

const miPerro: Perro = {
    nombre: "Panchini",
    edad: 5,
    raza: "salchicha",
    adiestrado: true
};

console.log(miPerro);