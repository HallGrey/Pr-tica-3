// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let pedro = 1.50; //guarda a altura do Pedro
let lucas = 1.10; //guarda a altura do Lucas
const maisPedro = 0.02; //taxa de crescimento do Pedro
const maisLucas = 0.03; //taxa de crescimento do Lucas

let contaAnos = 0;//contador de anos

while(pedro > lucas){
    pedro += maisPedro;
    lucas += maisLucas;
    contaAnos++;
}

let anosMaior = 1;
anosMaior = contaAnos + anosMaior

document.write(`Lucas será maior que Pedro em ${anosMaior} anos<br>`)
document.write(`Pedro e Lucas teram a mesma altura em ${contaAnos} anos<br>`)



