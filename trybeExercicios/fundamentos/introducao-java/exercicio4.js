const a = 60
const b = 60
const c = 60

let somaDosAngulos = a + b + c;

let angulosPositivos = a > 0 && b > 0 && c > 0;

if (angulosPositivos){
    if (somaDosAngulos === 180){
        console.log(true)
    } else {
        console.log(false)
    };

} else {
    console.log( "Angulo invalido")

}
