let notaEstudante = 105

const porcentagem = notaEstudante <= 100 && notaEstudante >= 0;

if (porcentagem){
    if (notaEstudante >= 90){
        console.log(`A`)
    } else if (notaEstudante >= 80 && notaEstudante < 90){
        console.log(`B`)
    } else if (notaEstudante >= 70 && notaEstudante <= 79){
        console.log(`C`)
    } else if (notaEstudante >= 60 && notaEstudante <= 69){
        console.log(`D`)
    } else if (notaEstudante >= 50 && notaEstudante <= 59){
        console.log(`E`)
    } else{
        console.log(`F`)
    }
}else {
    console.log(`Nota invalida, por favor utilize de 0 a 100%`)
}