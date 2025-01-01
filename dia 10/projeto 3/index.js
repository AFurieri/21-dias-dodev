let numArray = parseInt(prompt('quantos numeros você deseja que esse array contenha?'));
let array = [];
let contador = numArray - 1;
let arrayInverso = [];

for(i = 0; i < numArray; i++){
    let numero = prompt('insira o ' + (i+1) + 'º número do array');
    array[i] = numero;
}  
console.log('aqui está o array desejado: ' + array);

for(i = 0; i < numArray; i++){
    arrayInverso[contador] = array[i];
    contador--;
}
console.log('o array inverso é: ' + arrayInverso);