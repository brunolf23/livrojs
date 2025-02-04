const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velPermitida = Number(frm.inVelocidade.value);
    const velCondutor = Number(frm.inCondutor.value);
    const velLeve = (velCondutor * 0.20) + velCondutor;

    if (velCondutor <= velPermitida) {
        resp1.innerText = `Sem Multa!`;
    } else if (velLeve <= velPermitida) {
        resp1.innerText = `Multa Leve! ${velLeve}`;
    } else if (velLeve > velLeve) {
        resp1.innerText = `Multa Grave!`
    };
});