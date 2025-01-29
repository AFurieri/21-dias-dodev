let arrayA = [15, 49, 34, 12, 26, 35, 44, 223, 333, 43]
let arrayB = [19, 5, 44, 223, 69, 51, 333, 23, 22, 27]

function numIguais (array1, array2){
    let arrayIguais = []
    let contadorArrayIguais = 0
    
    for(let i = 0 ; i < array1.length; i++){
        for(j = 0; j < array2.length; j++){
            if(array1[i] == array2[j]){
                arrayIguais[contadorArrayIguais] = array1[i]
                contadorArrayIguais++
            }
        }
    }
    return arrayIguais
}
console.log(numIguais(arrayA, arrayB))