let mediaTurma = 0
let somaNotas = 0
let continuar = true;
let contador = 0;
let names = [];
let grades = [];

while(continuar){
    let nome = prompt('insira o nome do aluno')
    let nota = parseInt(prompt('insira a nota de ' + nome ))
    
    names[contador] = nome;
    grades[contador] = nota;
    
    contador++;
    somaNotas += nota;
    
    continuar = prompt('deseja inserir mais alguma nota? (s/n)')
    if(continuar != 's'){
        continuar = false
    }
}

mediaTurma = somaNotas/names.length;

for (i = 0; i < names.length; i++){
    console.log('a nota de ' + names[i] + ' foi: ' + grades[i] )
}
console.log('a soma de todas as notas dos alunos foi: ' + somaNotas)
console.log('a media geral da turma foi de: ' + mediaTurma)