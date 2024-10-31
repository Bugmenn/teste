const sim = window.document.getElementById("opcyes")
const nao = window.document.getElementById("opcNo")
const fundo = window.document.getElementById("area")
const resp = window.document.getElementById("textinho")
const imagem = window.document.getElementById("imagem")
const link = window.document.getElementById("link")

nao.addEventListener("mouseenter", entrar)
let estadoAnterior = -1;

function entrar(){
    let min = 0;
    let max = 7;
    let estado;

    do {
        estado = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (estado === estadoAnterior);

    estadoAnterior = estado;

    sim.style.transform="translate(+95px)"

    if (estado == 0){    
        nao.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
    }
}

sim.addEventListener("click", clicar)

function clicar(){
    resp.innerHTML ="É claro que te amo meu amor!!!"
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"

    imagem.innerHTML = '<img src="./imagem.png" width="300" height="200" id="imagem">'

    link.innerHTML = '<a href="https://open.spotify.com/intl-pt/track/64KfS9mXJBi6ZLWzlKA45i?si=7c1ebdf0479047c6" target="_blank"><h2>Clica em mim</h2></a>'

    resp.style.opacity= 1;
    imagem.style.opacity = 1;

    setTimeout(function(){
        resp.style.opacity = 0;
        imagem.style.opacity = 0;
      }, 3000 )
    
}