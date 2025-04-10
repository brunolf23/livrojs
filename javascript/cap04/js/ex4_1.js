const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const nome = frm.inNome.value // obtem o valor do form
    const nota1 = Number(frm.inNum1.value)
    const nota2 = Number(frm.inNum2.value)

    const media = (nota1 + nota2) / 2 // calcula a média das notas
    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}!\n Você foi aprovado(a).`
        resp2.style.color = "blue"
    } else if (media >= 4) {
        resp2.innerText = `Atenção ${nome}.\n Você está em recuperação.`
        resp2.style.color = "green"
    } else {
        resp2.innerText = `Ops ${nome}...\n Você foi reprovado(a).`
        resp2.style.color = "red"
    }
})