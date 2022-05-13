export class Mobile
{
    constructor(private name:string,private model:string,private trademarck:string,private sdSize:number,private color:string,private is5G:boolean,private cameraNumber :number,private price:number

    
)
    {
        this.name=name;
        this.model=model;
        this.trademarck=trademarck;
        this.sdSize=sdSize;
        this.color=color;
        this.is5G=is5G;
        this.cameraNumber=cameraNumber;
        this.price=price;
    }
    public print()
    {
        console.log(this.name +"\n"+this.model+"\n"+this.trademarck+"\n"+this.sdSize+"\n"+this.color+"\n"+this.is5G+"\n"+this.cameraNumber+"\n"+this.price);
    }
    
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
    public getTrademarck(): string {
        return this.trademarck;
    }

    public setTrademarck(trademarck: string): void {
        this.trademarck = trademarck;
    }
    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }
    public getSdSize(): number {
        return this.sdSize;
    }

    public setSdSize(sdSize: number): void {
        this.sdSize = sdSize;
    }
    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }
    public isIs5G(): boolean {
        return this.is5G;
    }

    public setIs5G(is5G: boolean) {
        this.is5G = is5G;
    }
    public setcamerNumber(cameraNumber:number)
    {
        this.cameraNumber=cameraNumber
    }
    public getcameraNumber():number
    {
        return this.cameraNumber;
    }
    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public imprimir():void
    {
        console.log("The characteristics of the mobile "+this.name+" are: \n"+"Name : "+this.name +"\n"+"Model : "+this.model+"\n"+"Trademark : "+this.trademarck+"\n"+ "SD size(GB) : "+this.sdSize+"\n"+"Color : "+this.color +"\n"+"Is 5g? : "+this.is5G+"\n"+"Number of Cameras : "+this.cameraNumber )
    }
    
}