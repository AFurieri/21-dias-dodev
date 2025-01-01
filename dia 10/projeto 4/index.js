let fibonacci = []
let num = parseInt(prompt('insira um numero positivo e inteiro'))

fibonacci[1] = num
fibonacci[0] = num-1

for(i = 2; i < 30; i++){
    fibonacci[i] =  fibonacci[i-1] + fibonacci[i-2]
}
console.log(fibonacci)