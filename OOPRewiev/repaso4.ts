export class punto
{
    constructor(private x:number,private y:number

  
)
    {
        this.x=x;
        this.y=y;

    }
    public toString()
    {
        let resultado :string ="";
        let numx:string ="";
        let numy:string="";
        numx=this.x.toString();
        numy=this.y.toString();
        resultado ="("+numx+","+numy+")";
        console.log (resultado);
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
    public calcularDistancia(otroPunto:punto):number
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
    
}

