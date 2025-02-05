const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    /*
    if ((numero / 2) % 1) {
        resp1.innerText = `${numero} é Ímpar`;
    } else {
        resp1.innerText = `${numero} é Par`;
    }
    */
    const resultado = numero % 2 ? "É ímpar" : "É par";
    resp1.innerText = `${numero} ${resultado}`;
});

frm.addEventListener("reset", () => {
    resp1.innerText = "";
});