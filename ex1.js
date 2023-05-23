// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let menorAltura = 0;
let maiorAltura = 0;

for(i = 0; i < 15; i++){
    altura = Number(prompt("Digite a altura da pessoa:"))

    if(menorAltura === 0){
        menorAltura = altura
    }

    if(altura > maiorAltura){
        maiorAltura = altura
    }

    if(altura < menorAltura){
        menorAltura = altura
    }
}

document.write(`A menor altura apresentada foi ${menorAltura} e a maior altura apresentada foi ${maiorAltura}`)