const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = parseInt(frm.inNumero.value);

    if ((numero / 2) % 1) {
        resp1.innerText = `${numero} é Ímpar`;
    } else {
        resp1.innerText = `${numero} é Par`;
    }
});

frm.addEventListener("reset", () => {
    resp1.innerText = "";
});