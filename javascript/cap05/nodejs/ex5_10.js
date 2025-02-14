const prompt = require("prompt-sync")()
const valor = Number(prompt(`Valor R$: `))
const parcela = Number(prompt(`Nº de Parcelas: `))


const mensal = Math.floor(valor / parcela)
const ultimaParcela = mensal + (valor % parcela)

for (let i = 1; parcela > i; i++) {
    console.log(`${i}ª parcela: R$ ${mensal.toFixed(2)}`)
}
console.log(`${parcela}ª parcela: R$ ${ultimaParcela.toFixed(2)}`)