// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let total = 0;
let positivos = 0;
let negativos = 0;
let aux = 0;

for (let i = 1; i <= 10; i++){
    const numero = Number(prompt("Digite um número"))
    total += numero
    aux++
    if (numero > 0){
        positivos++
    }else{
        negativos++
    }
}

document.write(`A média entre os valores totais é de: ${total/aux}<br>`)
document.write(`A quantidade de valores positivos é de: ${positivos}<br>`)
document.write(`A quantidade de valores negativos é de: ${negativos}<br>`)
document.write(`O percentual de valores é de: ${positivos*100/aux} positivos e ${negativos*100/aux} negativos<br>`)