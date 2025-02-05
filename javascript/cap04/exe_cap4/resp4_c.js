const frm = document.querySelector("form");
const resp1 = document.querySelector("#outTexto1");
const resp2 = document.querySelector("#outTexto2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorMoeda = Number(frm.inValor.value);

    const menorValor = Math.abs(valorMoeda - 1.00);
    const medioValor = Math.abs(valorMoeda - 1.75);
    const maiorValor = Math.abs(valorMoeda - 3.00);

    if (valorMoeda < 1.00) {
        resp1.innerText = `Valor insuficiente`;
    } else if (valorMoeda < 1.75) {
        resp1.innerText = `Troco R$: ${menorValor.toFixed(2)}`;
        resp2.innerText = `Tempo: 30 min`;
    } else if (valorMoeda >= 1.75 && valorMoeda < 3.00) {
        resp1.innerText = `Troco R$: ${medioValor.toFixed(2)}`;
        resp2.innerText = `Tempo: 60 min`;
    } else {
        resp1.innerText = `Troco R$: ${maiorValor.toFixed(2)}`;
        resp2.innerText = `Tempo: 120 min`;
    }
});

frm.addEventListener("reset", () => {
    resp1.innerText = "";
    resp2.innerText = "";
});