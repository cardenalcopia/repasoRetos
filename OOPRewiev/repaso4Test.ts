import { Punto,Triangulo } from "./repaso4";

let punto1 = new Punto(-5,-5);
let punto2= new Punto(6,4);
let punto3 =new Punto(0,8);
let arraypuntos:Punto[]=[punto1,punto2];
punto1.toString();

punto1.distanciaOrigen();
console.log(punto1.calcularDistancia(new Punto(4,5)));
console.log(punto1.calcularCuadrante());
let mitriangulo= new Triangulo(punto1,punto2,punto3);
console.log(mitriangulo.calcularLongitudLados());
console.log(punto3.calcularMasCercano(arraypuntos));