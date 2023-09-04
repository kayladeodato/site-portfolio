// Deixando o ano automático pra não precisar ficar alterando manualmente:
var anoAtualElemento = document.getElementById('ano-atual');
var anoAtual = new Date().getFullYear();

anoAtualElemento.innerHTML = `Kayla Deodato &copy; ${anoAtual}`;


// Simulando o envio do formulário
var meuBotao = document.getElementById('enviar');

meuBotao.addEventListener('click', function() {
    alert('Mensagem enviada! Retornarei seu contato em breve');
});
