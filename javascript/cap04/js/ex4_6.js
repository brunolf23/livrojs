const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorSaque = Number(frm.inSaque.value);
    if (valorSaque % 10 != 0) {
        alert(`Valor inválido para notas disponível (R$ 10, 50, 100)`);
        frm.inSaque.focus();
        return;
    }

    const notasCem = Math.floor(saque / 100);
});