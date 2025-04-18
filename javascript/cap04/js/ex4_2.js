const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.value
    const altura = Number(frm.inAltura.value)

    let peso // declarar variável
    if (masculino) {
        peso = 22 * Math.pow(altura, 2) // math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    resp.innerText = `${nome} Seu peso ideial é ${peso.toFixed(3)}kg.`
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
})