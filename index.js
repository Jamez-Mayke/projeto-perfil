const curiosidadeMinha = document.getElementById("acionar__motivacional");
curiosidadeMinha.addEventListener("click", e => {
    document.getElementById("mensagem__motivacional").innerText = '"Bendito seja o incômodo ' + 
    'que te faz querer sair de um lugar que não te cabe."';
});