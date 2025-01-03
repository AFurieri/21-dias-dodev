let cars = []
let prices = []
let years = []
let again = true
let contador = 0

while (again) {
    let car = prompt('insira o modelo do veículo')
    let year = parseInt(prompt('insira o ano de fabricação do ' + car))
    let price = parseInt(prompt('insira o valor do veículo'))
    
    cars[contador] = car
    prices[contador] = price
    years[contador] = year
    if(price > prices[contador]){
            price = prices[contador]
        } 
    again = prompt('deseja cadastrar mais algum veículo? (s/n)')
    if (again != 's'){
        again = false
    }
    contador++
}

for (let i = 0; i < cars.length; i++){
    console.log(cars[i] + ', ' + years[i] + ' valor: ' + prices[i])
}

for (i = 0; i < (cars.length - 1); i++)
    for (let j = 0; j < (cars.length - i - 1); j++){
        if (prices[j] > prices[j +1]){
        
            let modeloMaiorValor = cars[j]
            cars[j] = cars[j + 1]
            cars[j + 1] = modeloMaiorValor

            let anoMaiorValor = years[j]
            years[j] = years[j + 1]
            years[j + 1] = anoMaiorValor

            let maiorValor = prices[j]
            prices[j] = prices[j + 1]
            prices[j + 1] = maiorValor
        }
    }

console.log('carros em lista de preço: ')

for (let i = 0; i < cars.length; i++){
    console.log( cars[i] + ', ' + years[i] + ' valor: ' + prices[i])
}