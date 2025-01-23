const frm = document.querySelector("form");
const texto1 = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempoUso = Number(frm.inTempo.value)

    const valorMinutos = Math.ceil(tempoUso / 15) * valor

    texto1.innerText = `Valor a Pagar R$: ${valorMinutos.toFixed(2)}`

    e.preventDefault()
});