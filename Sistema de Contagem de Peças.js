var pesoPeca = 0;
var nomePeca = "";
var qtdpPecasCaixa = 0;
pesoPeca = prompt("Informe a quantidade peças na caixa");

    if (pesoPeca >=3) {
     nomePeca + prompt("Informe o nome da peça");

       if (nomePeca.length <= 3){
           qtdpPecasCaixa = prompt("Informe a quantidade peças na caixa");

          if (qtdpPecasCaixa >= 10) {
            console.log("A caixa já está cheia")
        } else {
            console.log("Processo concluido com sucesso")
          }
       } else {    
          console.log("O nome da peça é muito pequeno");
       }
      } else {
         console.log("A peça não tem o peso minímo permitido")
  }