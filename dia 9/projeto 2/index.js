let salarioAtual
let dadosCertos

do { 
    let nome = prompt('insira seu nome')
    let idade = parseInt(prompt('insira sua idade'))
    salarioAtual = Number(prompt('insira seu salario atual'))

    console.log(nome)
    console.log(idade)
    console.log(salarioAtual)
    
    dadosCertos = prompt('você iseriu todos seus dados de forma correta? (s/n)')
    
} while(dadosCertos !== 's')

let aumento = 0.015

for (let ano = 2024; ano <= 2034; ano ++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2
    console.log(ano + ' salario : ' + salarioAtual.toFixed(2))
}