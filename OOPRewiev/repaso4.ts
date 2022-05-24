export class Punto
{
    constructor(private x:number,private y:number

  
)
    {
        this.x=x;
        this.y=y;

    }
    public toString():string
    {
        let resultado :string ="";
        let numx:string ="";
        let numy:string="";
        numx=this.x.toString();
        numy=this.y.toString();
        resultado ="("+numx+","+numy+")";
        return resultado;
    }
    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }
    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }
    public distanciaOrigen ()
    { 
        let resultado:number=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
        console.log(resultado);
    }
    public calcularDistancia(otroPunto:Punto):number
    {
        let resultado:number=Math.sqrt((Math.pow((this.x-otroPunto.x),2))+(Math.pow((this.y-otroPunto.y),2)));
        return resultado;

    }
    public calcularCuadrante():number
    {
        let cuadrante:number
        if (this.x == 0 || this.y ==0)
        {
            cuadrante=0;
        }else if(this.x>0 && this.y>0)
        {
            cuadrante=1;
        }else if (this.x<0 && this.y>0)
        {
            cuadrante=2;
        }else if (this.x<0 && this.y<0)
        {
            cuadrante=3;
        }else if (this.x>0 && this.y<0)
        {
            cuadrante =4;
        }
        return cuadrante;
    }
    public calcularMasCercano(puntos:Punto[]):Punto
    {
       let punto0;
       let distancia= Number.MAX_VALUE;
        for(let i = 0; i < puntos.length; i++)
        {
            if(this.calcularDistancia(puntos[i]) < distancia)
            {                
                distancia = this.calcularDistancia(puntos[i])  
                punto0 = puntos[i]     
                            
             } 
        }
        return punto0      
    }   
    
}
export class Triangulo
{
    constructor(private trix:Punto,private triy:Punto,private triz:Punto)
    {
        this.trix=trix;
        this.triy=triy;
        this.triz=triz;
    }
    public calcularLongitudLados():number[]
    {
       let trian:number []=[];
        let resultadoa:number=Math.sqrt((Math.pow((this.trix.getX()-this.triy.getX()),2))+(Math.pow((this.trix.getY()-this.triy.getY()),2)));
        trian.push(resultadoa);
        let resultadob:number=Math.sqrt((Math.pow((this.trix.getX()-this.triz.getX()),2))+(Math.pow((this.trix.getY()-this.triz.getY()),2)));
        trian.push(resultadob);
        let resultadoc:number=Math.sqrt((Math.pow((this.triz.getX()-this.triy.getX()),2))+(Math.pow((this.triz.getY()-this.triy.getY()),2)));
        trian.push(resultadoc);
        return trian;
    }
   

}

