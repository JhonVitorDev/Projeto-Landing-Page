var SetaDireita = document.getElementById("seta-direita")
var Leonardo = document.getElementById("Leonardo")
var Samantha = document.getElementById("Samantha")
var Bruna = document.getElementById("Bruna")
var SetaEsquerda = document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top: 55px;"
}

function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}