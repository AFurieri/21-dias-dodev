let saldo = 100000;
const nome = prompt("Insira seu nome");
const cpf = prompt("Insira seu cpf");
let condiçao = "";
let somaSaque = 0;
let contador = 0;
let somaDeposito = 0;
let maiorDeposito = 0;
let maiorSaque = 0;
let saque = 0;
let deposito = 0;
let contadorSaque = 0;
let contadorDeposito = 0;

do {
    let operaçao = parseInt(prompt("Você deseja fazer um (1) saque ou um (2) deposito"))

    if (operaçao === 1) {
        saque = Number(prompt("Qual o valor você deseja sacar? saldo atual: " + saldo))
        
        if(saque <= saldo && saque > 0){
            saldo -= saque;
            somaSaque += saque;
            contadorSaque++
            if (saque > maiorSaque) {
                maiorSaque = saque;
            }
        } else {
            console.log("Essa operação não é permitida")
        }  
    }
    
    if(operaçao === 2){
        deposito = Number(prompt("Qual valor você deseja depositar? saldo atual: " + saldo))
        
        if (deposito > 0) {
           saldo += deposito
           somaDeposito += deposito
           contadorDeposito++
           
           if (deposito > maiorDeposito) {
            maiorDeposito = deposito
        }
        } else {
            console.log("Essa operação não é permitida")
        }
    }
   
    condiçao = prompt("Deseja fazer outra operação? (s/n)")
} while (condiçao === "s")

let totalContadores = contadorSaque + contadorDeposito
let totalOperações = somaSaque + somaDeposito

let media = totalOperações/totalContadores

console.log("Seu saldo agora é: " + saldo)
console.log("O maior saque foi de : " + maiorSaque)
console.log("O maior deposito foi de: " + maiorDeposito)
console.log("A média dos valores das operações é: " + media)
