const nome = prompt("qual seu nome?")
const idade = prompt("qual a sua idade?")
const carteiraDeMotorista = prompt("você possui a carteira de motorista? (sim/nao)")
const carro = prompt("você possui algum carro? (sim/nao)")
parseInt(idade)

if(idade < 18 || carteiraDeMotorista === "nao"){
    console.log(nome + ", você nao pode dirigir.")
}
if(idade >= 18 && carteiraDeMotorista === "sim" && carro === "nao"){
    console.log(nome + ", você pode dirigir, porém nao possui um carro para exercer esse direito.")
}
if(idade >= 18 && carteiraDeMotorista === "sim" && carro === "sim"){
    console.log(nome + ", você será o motorista!")
} 