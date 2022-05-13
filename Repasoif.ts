function horoscopo(dia:number,mes:number):string
{
    let signo="";
    if ((dia>= 21 && mes==5)||(dia<=20 && mes==6))
    {
        signo="Géminis";
    }else  if ((dia>= 21 && mes==6)||(dia<=22 && mes==7))
    {
        signo="Cáncer";
    }else  if ((dia>= 23 && mes==7)||(dia<=22 && mes==8))
    {
        signo="Leo";
    }
    else  if ((dia>= 23 && mes==8)||(dia<=22 && mes==9))
    {
        signo="Virgo";
    }
    else  if ((dia>= 23 && mes==9)||(dia<=22 && mes==10))
    {
        signo="Libra";
    }
    else  if ((dia>= 23 && mes==10)||(dia<=21 && mes==11))
    {
        signo="Escorpio(El mejor)";
    }else  if ((dia>= 22 && mes==11)||(dia<=21 && mes==12))
    {
        signo="Sagitario";
    }
    else  if ((dia>= 22 && mes==12)||(dia<=19 && mes==1))
    {
        signo="Capricornio";
    }else  if ((dia>= 20 && mes==1)||(dia<=18 && mes==2))
    {
        signo="Acuario";
    }else  if ((dia>= 19 && mes==2)||(dia<=20 && mes==3))
    {
        signo="Cáncer";
    }else{
        signo="Fallo en la fecha"
    }
return signo;
}

let persona = horoscopo(10,1);
console.log(persona);