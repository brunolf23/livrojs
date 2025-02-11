const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let resposta = `Entre ${numero} e 1: `;

    for (let i = numero; i > 1; i--) { // cria um for decrecente
        resposta = resposta + i + ", "; // resposta acumula números (e virgulas)
    }
    resposta = resposta +"1.";
    resp.innerText = resposta; // exibe a resposta
});