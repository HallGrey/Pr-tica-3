// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

let multiploTres = 0;
let multiploCinco = 0;

for(contador = 1; contador <= 250; contador++){
    multiploCinco = contador % 5
    if (multiploCinco === 0){
        document.write(`o número ${contador} é múltiplo de 5<br>`)
    }

    multiploTres = contador % 3
    if (multiploTres === 0){
        document.write(`o número ${contador} é múltiplo de 3<br>`) 
    }

}

