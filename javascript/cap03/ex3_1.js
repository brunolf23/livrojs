const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados
const num1 = Number(prompt("1º Número: ")) // lê os números
const num2 = Number(prompt("2ª Número: "))

const soma = num1 + num2 // a soma dos números

console.log(`A soma é: ${soma}`) // exibir o resultado