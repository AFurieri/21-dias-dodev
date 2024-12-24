let serviço = parseInt(prompt("Bem vindo ao posto nvsk, escolha um de nossos serviços para usufruir.  abastecer com gasolina = 1; abastecer com alcool = 2; calibrar pneus = 3"))

switch(serviço){
    case 1:
        let gasolina = Number(prompt("quantos reais de gasolina você deseja?")) / 5
        console.log("você poderá abastercer " + gasolina + " litros de gasolina com esse valor")
        break;
    case 2: 
        let alcool = Number(prompt("quantos reais de alcool você deseja?")) / 3
        console.log("você poderá abastecer " + alcool + " litros de alcool com esse valor")
        break;
    case 3:
        console.log("...  pneus calibrados com sucesso!!!!!")
        break;
    default:
        console.log("opção inválida")
        break;
}

 