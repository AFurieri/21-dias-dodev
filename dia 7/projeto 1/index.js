let maiorNotaH = 0;
let outraNota = "s";
let contador = 0;
let qntdHomens = 0;
let mulheresAcimade7 = 0;
let soma = 0;


while(outraNota === "s"){
    let sexo = prompt("insira a sexualidade do aluno (m/f)")
    let nota = parseInt(prompt("insira a nota do aluno" ))
    
    soma += nota
    contador++
    
    if(sexo === "m"){
       if(nota > maiorNotaH){
        maiorNotaH = nota
       }
       qntdHomens++
    }
    
    if(sexo === "f" && nota > 7){
        mulheresAcimade7 ++
    }
    outraNota = prompt("existe mais alunos para computar a nota? (s/n)")
    
}
const mediaGeral = soma /contador

console.log("a maior nota entre os homens é: " + maiorNotaH)
console.log("o numero de mulheres com nota acima de 7 é: " + mulheresAcimade7)
console.log("a media geral dos alunos dessa instituição é: " + mediaGeral.toFixed(1))
console.log("a quantidade de homens que enviaram suas notas é: " + qntdHomens)