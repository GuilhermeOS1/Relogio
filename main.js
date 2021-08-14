 var a = setInterval(relogio ,1000); //Intervalo de um segundo
    function relogio() { //Função
        var b = new Date(), displayDate; //Armazena a data
        displayDate = b.toLocaleTimeString('pt-BR'); //Pega só a hora
        document.getElementById("relogio").innerHTML = displayDate; //Coloca a hora na tela
    }