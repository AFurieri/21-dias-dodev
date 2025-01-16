class carro {
    constructor(equipe, potencia, velocidadeMAx, aceleraçao){
        this.equipe = equipe;
        this.potencia = potencia;
        this.velocidadeMAx = velocidadeMAx;
        this.aceleraçao = aceleraçao;
    }
    tempo(distanciaMetros){
        const segundos = distanciaMetros / (this.velocidadeMAx / this.aceleraçao);
        return segundos;
    }
}
class corrida {
    constructor(nome, tipo, distancia){
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.participantes = [];
        this.vencedor = "";
    }
    winner(){
        let menorTempo = this.participantes[0].tempo(this.distancia)
        let vencedor = this.participantes[0]
        
        for(let i = 1; i < this.participantes.lenght; i++){
            let tempo = this.participantes[i].tempo(this.distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[i]
            }
        }
        return this.vencedor = vencedor
    } 
    mostrarVencedor(){
        alert("o vencedor foi: " + this.vencedor.equipe)
    }
}

let run = new corrida("monza", "Formula 1", 60000)
run.participantes[0] = new carro("mercedes", 600, 300, 2)
run.participantes[1] = new carro("McLaren", 650, 328, 2.2)
run.participantes[3] = new carro("lamborgini", 700, 330, 1.6)

run.winner()
run.mostrarVencedor()



