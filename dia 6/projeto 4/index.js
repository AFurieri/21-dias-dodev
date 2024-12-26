let num = parseInt(prompt("insira um número para se desenvolver a tabuada dele e de seus próximos 2 subsequentes"))
for(let j = num ; j <= num+2 ; j++){
    console.log("tabuada do " + j)
    for(let i = 0; i <= 10; i++){
        console.log(j + " x " + i + " = " + (j * i))
    }
}