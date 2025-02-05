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

/*
const frm = document.querySelector("form") // obtém elementos da página
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
  e.preventDefault() // evita envio do form

  const valor = Number(frm.inValor.value) // obtém número digitado no form

  // caso valor insuficiente
  if (valor < 1.00) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)")
    frm.inValor.focus()
    return
  }

  // declara variáveis
  let tempo
  let troco

  // cria as condições para verificar tempo e troco
  if (valor >= 3.00) {
    tempo = 120
    troco = valor - 3.00
  } else if (valor >= 1.75) {
    tempo = 60
    troco = valor - 1.75
  } else {
    tempo = 30
    troco = valor - 1.00
  }

  // exibe as respostas
  resp1.innerText = `Tempo: ${tempo} min`
  if (troco > 0) {
    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
  }
})
*/