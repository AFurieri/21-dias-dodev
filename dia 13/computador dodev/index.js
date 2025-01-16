class Computador {
    constructor(tipo, processador, video, armazanamento, memoria, ssd){
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazanamento;
        this.memoria = memoria;
        this.ssd = ssd;
    }
    meuComputador () {
       console.log("informaçoes do computador");
       console.log("tipo: " + this.tipo);
       console.log("processador: " + this.processador);
       console.log("video: " + this.video);
       console.log("armazenamento: " + this.armazenamento);
       console.log("memoria: " + this.memoria);
       console.log("ssd: " + this.ssd);
    }
}


const meuPC = new Computador("desktop", "i5 9900f", "dedicado" , "240GB", "16gb", "true");
meuPC.meuComputador();