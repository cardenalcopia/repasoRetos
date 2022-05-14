import { punto,triangulo } from "./repaso4";

let punto1 = new punto(-5,-5);
let punto2= new punto(6,4);
let punto3 =new punto(0,8);
punto1.toString();
punto1.distanciaOrigen();
console.log(punto1.calcularDistancia(new punto(4,5)));
console.log(punto1.calcularCuadrante());
let mitriangulo= new triangulo(punto1,punto2,punto3);
console.log(mitriangulo.calcularLongitudLados());