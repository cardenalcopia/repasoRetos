unction cuentaLetras(miArra2:string [])
{
    let miContador:number=0;
    let i:number=0;
    while(i<miArra2.length)
    {
      let sinespacios:string=  miArra2[i].replace(/ /g,"");
        miContador+=sinespacios.length;
    i++;
    }

    return miContador;
}
let palabra= cuentaLetras(["roberto","rodriguez"])
console.log(palabra);

function parImpar(n:number)
{
    if(n%2==0) 
    {
        console.log("El numero introducido es par")
    }else
    {
        console.log("El numero introducido es impar")
    }
}
parImpar(5);

function palabraPar(miArray:string [])
{
    let palab:number=cuentaLetras(miArray);
    parImpar(palab);
}
palabraPar(["casa","coche","ciudad","cesta"]) ;
palabraPar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
palabraPar(["Venezuela", "Veneno", "Voltaje"]);