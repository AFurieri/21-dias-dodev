const fome = prompt("você está com fome? (sim/nao)")
const dinheiro = prompt("você está com dinheiro no momento? (sim/nao)")
const restaurante = prompt("o restaurante que você gosta está aberto? (sim/nao)")

if(fome === "nao" || dinheiro === "nao"){
    console.log("hoje o jantar será em casa")
}
if(fome === "sim" && dinheiro === "sim" && restaurante === "nao"){
    console.log("peça um delivery!")
}
if(fome === "sim" && dinheiro === "sim" && restaurante === "sim"){
    console.log("hoje o jantar será em seu restaurante favorito!!!")
}
    
