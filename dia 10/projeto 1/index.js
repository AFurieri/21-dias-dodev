let numero = 1
let array = []
let arrayIndices = []
let contadorIndices = 0

for (let i = 0; i < 10; i++){
    numero = parseInt(prompt('insira o valor do ' + (i + 1) + ' numero do array'))
    array[i] = numero
}

let procurar = parseInt(prompt('insira um número ja inserido anteriormente para ser procurado'))

for(i = 0; i < 10; i++){
    if (array[i] === procurar){
        arrayIndices[contadorIndices] = i
        contador++
    }
}

console.log('o numero ' + procurar + ' foi encontrado no indice: ' + arrayIndices)