const prompt = require("prompt-sync")()
const pesoRacao = Number(prompt(`Peso da Ração(kg): `))
const quantidadePorcao = Number(prompt(`Consumo Diário(gr): `))

const pesoGr = pesoRacao * 1000
const duracao = Math.floor(pesoGr / quantidadePorcao)
const sobra = pesoGr % quantidadePorcao

console.log(`Duração: ${duracao} dias.`)
console.log(`Sobra: ${sobra}gr`)