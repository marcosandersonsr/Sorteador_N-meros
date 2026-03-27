function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de >=ate) {
        alert("O valor 'de' deve ser menor que o valor 'até'. Por favor, corrija os valores.");
        return;
    }
    if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
    }
    

    let sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obertNumerosAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obertNumerosAleatorio(de, ate);
            validarQuantidade();
        }

        sorteados.push(numero);
    }


    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.join(", ")}</label>`; 
    
    alterarStatusBotao();
    validarEntrada();
    
}

function obertNumerosAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }

}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Números sorteados:  nenhum até agora";
    alterarStatusBotao();
}
