const frm = document.querySelector("form");
const resp1 = document.querySelector("#outTexto1");
const resp2 = document.querySelector("#outTexto2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(frm.inA.value);
    const ladoB = Number(frm.inB.value);
    const ladoC = Number(frm.inC.value);

    if (ladoA == ladoB && ladoA == ladoC) {
        resp1.innerText = `É um Equilátero`;
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        resp1.innerText = `É um Isósceles`;
    } else {
        resp1.innerText = "É um Escaleno";
    }
});

frm.addEventListener("reset", () => {
    resp1.innerText = "";
    resp2.innerText = "";
});