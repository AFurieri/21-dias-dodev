let nome
let salario


function colaborador (){
    nome = prompt("insira o nome do colaborador")
    salario = parseInt(prompt("insira o salário do coloborador"))
    aumento(nome, salario)
}
    
function aumento(nome, salario){
        
    if(salario <= 1500){
        taxaAumento *= 1.2;
    }
    if(salario > 1500 && salario <= 2000){
        taxaAumento = 1.15;
    }
    if(2000 < salario && salario <= 3000){
        taxaAumento = 1.1;
    }else{
        taxaAumento = 1.05;
    }
        
    novoSalario = (taxaAumento * salario)

    console.log(
        "nome: " + nome +
        " salario antigo: " + salario + 
        " salario atual: " + novoSalario.toFixed(2) +
        " taxa de aumento: " + ((taxaAumento - 1)* 100) + "%"
    )
    continuar()
}
function continuar () {
    let dados = prompt("deseja inserir dados de outro colaborador? s/n ")
    if(dados == "s"){
        colaborador()
    }else{
        console.log("programa finalizado")
    }
}

colaborador()