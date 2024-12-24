let num1 = 2
let num2 = 5
let operaçao = " "

num1 = Number(prompt("insira um número qualquer"))
num2 = Number(prompt("insira qualquer numero de novo"))
operaçao =prompt("escolha qual operação deverá ser feita com esses números;     x ; / ; + ; -")

switch(operaçao){
    case "x":
        console.log(num1 + " x " + num2 + " = " + (num1*num2))
        break;
    case "/":
        console.log(num1 + " / " + num2 + " = " + (num1/num2))
        break;
    case "+":
        console.log(num1 + " + " + num2 + " = " + (num1+num2))
        break;
    case "-": 
        console.log(num1 + " - " + num2 + " = " + (num1-num2))
        break;
    default:
        console.log("opção inválida")
        break;
}