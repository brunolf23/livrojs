const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velPermitida = Number(frm.inVelocidade.value);
    const velCondutor = Number(frm.inCondutor.value);
    const velLeve = (velPermitida * 0.20) + velPermitida;

    if (velCondutor <= velPermitida) {
        resp1.innerText = `O radar era de ${velPermitida}km/h. Você passou a ${velCondutor}km/h. Sem Multa!`;
    } else if (velCondutor > velPermitida && velCondutor <= velLeve) {
        resp1.innerText = `Multa Leve! O radar era de ${velPermitida}km/h. Você passou a ${velCondutor}km/h.`;
    } else {
        resp1.innerText = `Multa Grave! O radar era de ${velPermitida}km/h. Você passou a ${velCondutor}km/h.`;
    };
});

frm.addEventListener("reset", () => {
    resp1.innerText = "";
});