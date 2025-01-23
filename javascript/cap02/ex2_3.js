// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco / 2
    const parcelado = (preco / 2) / 12

// exibe as respostas
    resp1.innerHTML = `Promoção: ${veiculo}`
    resp2.innerHTML = `Entrade de R$: ${entrada.toFixed(2)}`
    resp3.innerHTML = `+12x de R$: ${parcelado.toFixed(2)}`

    e.preventDefault()
});