// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

let numero = Number(prompt("Digite o número que deseja multiplicar"));
let i = Number(prompt("Digite o número que iterações"));
let resultado = 0;

for(contador=1; contador < i; contador++){
    resultado = numero * contador
    document.write(`${numero} x ${contador} = ${resultado}<br>`)
}