import { Mobile } from "./repaso2";
class MobileLibrary 
{
    constructor(private name:string,private location:string,private mobiles : Mobile[],private totalPrice:number)

    

    {
        this.name = name ;
        this.location=location;
        this.mobiles=mobiles;

    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
    public getMobiles(): Mobile[] {
        return this.mobiles;
    }

    public setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles;
    }
    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

    public totalPriceCalculation ()
    {let contador : number =0;

        for (let i=0; i<this.mobiles.length;i++)
        {
          contador+= this.mobiles[i].getPrice();
        
        }
        console.log ("El precio total de la biblioteca es :"+ contador+"€");
    }
}
let nokia= new Mobile("Nokia3210","3210","Nokia",64,"azul",false,0,10);
let iPhone3g =new Mobile("iPhone","3G","Apple",256,"Blanco",false,1,150);
let samsung= new Mobile("Galaxy 10","10","Samsung",512,"Negro",true,3,200);
let miArray:Mobile[]=([nokia,iPhone3g,samsung]);
let libreria = new MobileLibrary("Libreria 1","Madrid",miArray,0);
libreria.totalPriceCalculation();
