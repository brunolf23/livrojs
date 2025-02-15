const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const passaro = Number(frm.inPassaro.value)
    const ano = Number(frm.inAno.value)

    let resposta = ""
    let total = passaro

    for (let i = 1; i <= ano; i++) {
        resposta = resposta + i + "º Ano: " + total + " Pássaros\n"
        total = total * 3
    }
    resp.innerText = resposta
})