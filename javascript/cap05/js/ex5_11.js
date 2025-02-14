const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const quantidade = Number(frm.inNumero.value)
    let resposta = ""

    for (let i = 1; i < quantidade; i++) {
        resposta = resposta + fruta + " * "
    }
    resp.innerText = resposta + fruta
})