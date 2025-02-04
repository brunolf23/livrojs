const prompt = require("prompt-sync")();
const pessoas = Number(prompt(`Nº de Pessoas: `));
const peixe = Number(prompt(`Nº de Peixes: `));

/*const entradaClub = pessoas * 20;
const quantidadePeixe = (peixe - pessoas) * 12;
const peixeAdicional = Number(entradaClub + quantidadePeixe);

if (pessoas >= peixe) {
    console.log(`Pagar R$: ${entradaClub.toFixed(2)}`);
} else {
    console.log(`Pagar R$: ${peixeAdicional.toFixed(2)}`);
};
*/

let pagar; 
if (pessoas >= peixe) {
    pagar = pessoas * 20;
} else {
    pagar = (pessoas * 20) + ((peixe - pessoas) * 12);
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`);