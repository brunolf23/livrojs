const prompt = require("prompt-sync")()
const salario = Number(prompt(`Sálario R$: `))
const tempoEmpresa = Number(prompt(`Tempo (anos): `))

const quadrienios = Math.floor(tempoEmpresa / 4)
const bonusSalario = salario * 0.1

const valorFinal = bonusSalario * quadrienios + salario

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Sálario Final R$: ${valorFinal.toFixed(2)}`)