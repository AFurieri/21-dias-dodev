let names = [];
let passwords = [];
let continuar = true;
let contador = 0;
let nome = "";
let senha = "";


while(continuar){
    let opçoes = parseInt(prompt('olá, você deseja fazer um cadastro(1), um login(2), encerrar um cadastro(3), ou encerrar o programa(4)?'))

    switch(opçoes){
        case 1 : 
            nome = prompt('insira seu nome')
            senha = prompt('insira uma senha, ' + nome)
            names[contador] = nome;
            passwords[contador] = senha;
            contador++;
            break;
        
        case 2 : 
            nome = prompt('insira seu nome')
            senha = prompt('insira sua senha, ' + nome)
            let sucess = false;
            for(let i = 0; i < names.length; i++){
                if (nome === names[i] && senha === passwords[i]){
                    sucess = true;
                    break;
                }
            }
            if(sucess = true){
                console.log('SUCESSO!! seu login foi confirmado')
            } else {
                console.log('usuário ousenh a incorretos')
            }
            break;
        case 3 : 
            let nomeExcluir = prompt('insira seu nome')
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0
            
            for(i = 0; i < names.length; i++){
                if(nomeExcluir === names[i]){
                    console.log('cadastro excluido com sucesso')
                } else { 
                    nomesAux[contadorAux] = names[i]
                    senhasAux[contadorAux] = passwords[i]
                    contadorAux++
                }
            }
            
            names = nomesAux
            passwords = senhasAux
            contador--
           
            break;
        case 4 : 
            continuar = false;
            break;
        default : 
            console.log('opção inválida, tente outra')
            break;
        }  
    
}