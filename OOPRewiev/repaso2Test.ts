import { Mobile } from "./repaso2";
let nokia= new Mobile("Nokia3210","3210","Nokia",64,"azul",false,0,10);
let iPhone3g =new Mobile("iPhone","3G","Apple",256,"Blanco",false,1,150);
let samsung= new Mobile("Galaxy 10","10","Samsung",512,"Negro",true,3,200);
nokia.print();
iPhone3g.print();
samsung.print();
nokia.is5G=true;
nokia.cameraNumber=4;
nokia.print();
iPhone3g.print();
samsung.print();
