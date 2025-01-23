// referências aos elementos da página
const frm = document.querySelector("form");
const texto1 = document.querySelector("#resp1");
const texto2 = document.querySelector("#resp2");

// ação para o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const produto = frm.medicamento.value
    const valorDoProduto = Number(frm.preco.value)

    // math.flor calcula o valor arredondando para baixo
    const soma = Math.floor(valorDoProduto * 2)

    // exibe a resposta
    texto1.innerText = `Promoção de ${produto}`
    texto2.innerText = `Leve 2 por apenas R$: ${soma.toFixed(2)}`

    e.preventDefault()
});