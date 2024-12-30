let nome = prompt ("insira seu nome")
let idade = parseInt (prompt("insira sua idade"))
let altura = parseFloat (prompt("insira sua altura")) .toFixed(2)
let peso = parseInt (prompt("insira seu peso"))
    
console.log ("olá, " + nome + ", você tem "+ idade + " anos, mede " + altura + " M de altura, e pesa " + peso+ " kg")

if (idade > 18) {
        console.log("está liberado para tomar uma gelada :)")
 } else {
        console.log("miou a gelada para você :(")
}

let mes = 12
let semanas = 52
let dias = 365

let idadeEmMeses = idade * mes
let idadeEmSemanas = idade * semanas
let idadeEmDias = idade * dias

console.log('sua idade em meses é: ' + idadeEmMeses)
console.log('sua idade em semanas é: ' + idadeEmSemanas)
console.log('sua idade em dias é: ' + idadeEmDias)

let imc = peso/(altura * altura)
imc = imc.toFixed(2)

if(imc < 18.5){
        console.log('Então, ' + nome + ' seu IMC é de ' + imc + ' Kg/m2, portanto você está em um estado de magreza, precisa melhorar seu condicionamento!')
} else if(imc > 18.5 && imc <= 24.9 ){
        console.log('Então, ' + nome + ' seu IMC é de ' + imc + ' Kg/m2, portanto você está em um estado de peso ideal para sua forma estrutural, parabéns!')
} else if (imc > 24.9  && imc <= 30){
        console.log('Então, ' + nome + ' seu IMC é de ' + imc + ' Kg/m2, portanto você está em um estado de sobrepeso, precisa melhorar seu condicionamento!')
} else{
        console.log('Então, ' + nome + ' seu IMC é de ' + imc + ' Kg/m2, portanto você está em um estado de obesidade, precisa melhorar de forma inadiável seu condicionamento!')
} 

let anoQNasceu = 2023 - idade
console.log('você nasceu em: ' + anoQNasceu)

let anoVivido = anoQNasceu
let idadeAtual = 0 

for(anoVivido = anoQNasceu; anoVivido <= 2023; anoVivido++){
        console.log('em ' + anoVivido + " você tinha " + idadeAtual + ' anos')
        idadeAtual++
    }
 