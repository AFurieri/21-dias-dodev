const nome = prompt("insira seu nome")

const idade = parseInt(prompt("insira sua idade"))

const altura = Number(prompt("insira sua altura"))

const peso = parseInt(prompt("insira seu peso"))

const nascimento = (2023 - idade)

const imc = peso/(altura*altura)
    
    console.log("olá " + nome + ", você tem " + idade + " anos, nasceu em " + nascimento + ", tem " + altura + " de altura, pesa " + peso + "kg, e seu IMC é " + imc + " kg/m2")