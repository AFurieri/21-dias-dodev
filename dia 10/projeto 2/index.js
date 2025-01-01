let array = []
let numero = 1
let arrayInvertido = []
let contador = 0

for(let i = 0; i < 5; i++){
    numero = parseInt(prompt('insira o ' + (i + 1) + ' numero do array'))
    array[i] = numero
}

console.log('array base' + array)

for (i = 4; i >= 0; i--){
    arrayInvertido[i]= array[contador]
    contador++
}
console.log('array invertido' + arrayInvertido)