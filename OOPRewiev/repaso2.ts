export class Mobile
{
    constructor(public name:string,public model:string,public trademarck:string,public sdSize:number,public color:string,public is5G:boolean,public cameraNumber :number,public price:number)
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
}