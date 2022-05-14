import { Mobile } from "./repaso2";
export class MobileLibrary 
{
    constructor(private name:string,private location:string,private mobiles : Mobile[],private totalPrice:number)

    

    {
        this.name = name ;
        this.location=location;
        this.mobiles=mobiles;
        this.totalPrice= this.totalPriceCalculation();

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

    private totalPriceCalculation ():number
    {let contador : number =0;

        for (let i=0; i<this.mobiles.length;i++)
        {
          contador+= this.mobiles[i].getPrice();
        
        }
        console.log ("El precio total de la biblioteca es :"+ contador+"€");
        return contador;
    }
    public printLibrary (a:Mobile[])
    {
        let contador : number =0;
        console.log ("This is all my mobiles : \n");
        for (let i=0;i<this.mobiles.length;i++)
        {
            console.log("The characteristics of the mobile "+this.mobiles[i].getName()+" are: \n"+"Name : "+this.mobiles[i].getName() +"\n"+"Model : "+this.mobiles[i].getModel()+"\n"+"Trademark : "+this.mobiles[i].getTrademarck() +"\n"+ "SD size(GB) : "+this.mobiles[i].getSdSize()+"\n"+"Color : "+this.mobiles[i].getColor() +"\n"+"Is 5g? : "+this.mobiles[i].isIs5G()+"\n"+"Number of Cameras : "+this.mobiles[i].getcameraNumber() )
           
        }
        console.log ("Price overall :"+this.totalPrice);
    }

}
let nokia= new Mobile("Nokia3210","3210","Nokia",64,"azul",false,0,10);
let iPhone3g =new Mobile("iPhone","3G","Apple",256,"Blanco",false,1,150);
let samsung= new Mobile("Galaxy 10","10","Samsung",512,"Negro",true,3,200);
let miArray:Mobile[]=([nokia,iPhone3g,samsung]);
let libreria = new MobileLibrary("Libreria 1","Madrid",miArray,0);
//libreria.totalPriceCalculation();
