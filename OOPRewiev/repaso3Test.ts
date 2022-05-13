import { Mobile } from "./repaso2";
import { MobileLibrary } from "./repaso3";
let nokia= new Mobile("Nokia3210","3210","Nokia",64,"azul",false,0,10);
let iPhone3g =new Mobile("iPhone","3G","Apple",256,"Blanco",false,1,150);
let samsung= new Mobile("Galaxy 10","10","Samsung",512,"Negro",true,3,200);
let xiaomi= new Mobile("Xiaomi","Mi Note 10","Xiaomi",512,"Blanco",true,4,300);
let miArray:Mobile[]=([nokia,iPhone3g,samsung,xiaomi]);