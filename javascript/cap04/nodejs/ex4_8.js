const prompt = require("prompt-sync")();
const valorCompra = Number(prompt(`Valor da Compra R$: `));

let quantidadeParcela = Math.floor(valorCompra / 20);
let parcelas;

if (quantidadeParcela == 0) {
    parcelas = 1;
} else if (quantidadeParcela > 6) {
    parcelas = 6;
} else {
    parcelas = quantidadeParcela;
}

const valorParcela = valorCompra / parcelas;
console.log(`Pode pagar em ${parcelas}x R$: ${valorParcela.toFixed(2)}`);