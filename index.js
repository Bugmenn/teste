const sim = document.getElementById("opcyes")
const nao = document.getElementById("opcNo")
const resp = document.getElementById("textinho")
const imagem = document.getElementById("imagem")
const link = document.getElementById("link")

// ---------- contador de dias juntos ----------
const inicioNamoro = new Date(2024, 9, 22) // 22/10/2024
const dias = Math.floor((new Date() - inicioNamoro) / (1000 * 60 * 60 * 24))
document.getElementById("days").textContent = dias

// ---------- corações flutuando no fundo ----------
const heartsBg = document.getElementById("heartsBg")
const totalCoracoes = 22

for (let i = 0; i < totalCoracoes; i++) {
    const coracao = document.createElement("span")
    coracao.className = "heart"
    coracao.textContent = "💗"
    coracao.style.left = Math.random() * 100 + "vw"
    coracao.style.fontSize = 14 + Math.random() * 20 + "px"
    coracao.style.animationDuration = 8 + Math.random() * 10 + "s"
    coracao.style.animationDelay = Math.random() * 12 + "s"
    heartsBg.appendChild(coracao)
}

// ---------- joguinho "eu te amo?" ----------
nao.addEventListener("mouseenter", entrar)
let estadoAnterior = -1

function entrar() {
    let min = 0
    let max = 7
    let estado

    do {
        estado = Math.floor(Math.random() * (max - min + 1)) + min
    } while (estado === estadoAnterior)

    estadoAnterior = estado

    sim.style.transform = "translate(+95px)"

    if (estado == 0) {
        nao.style.transform = "translate(130px, -150px)"
    }
    if (estado == 1) {
        nao.style.transform = "translate(130px, +150px)"
    }
    if (estado == 2) {
        nao.style.transform = "translate(-325px, +150px)"
    }
    if (estado == 3) {
        nao.style.transform = "translate(-325px, -150px)"
    }
    if (estado == 4) {
        nao.style.transform = "translate(+135px, +150px)"
    }
    if (estado == 5) {
        nao.style.transform = "translate(+135px, -150px)"
    }
    if (estado == 6) {
        nao.style.transform = "translate(-325px, +150px)"
    }
    if (estado == 7) {
        nao.style.transform = "translate(-325px, -150px)"
    }
}

sim.addEventListener("click", clicar)

function clicar() {
    resp.textContent = "É claro que te amo meu amor!!!"
    sim.style.transform = "translate(0px)"
    nao.style.transform = "translate(0px, 0px)"

    imagem.innerHTML = '<img src="./nos.jpg" width="300" alt="Eu e a Milly">'

    link.innerHTML = '<a href="https://open.spotify.com/intl-pt/track/64KfS9mXJBi6ZLWzlKA45i?si=7c1ebdf0479047c6" target="_blank"><h2>Clica em mim</h2></a>'

    resp.style.opacity = 1
    imagem.style.opacity = 1
}

// ---------- cards de motivos (flip) ----------
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped")
    })
})

// ---------- piadas ruins ----------
const piadas = [
    "Por que o casal apaixonado sempre carrega uma escada? Porque o amor deles tá em outro nível.",
    "Sabe qual o esporte favorito de casal? Namoro persistente.",
    "Meu amor por você é tipo wifi público: todo mundo vê, mas só você tem a senha.",
    "Se beleza fosse crime, você já estava presa desde 22/10/2024.",
    "Você deve ser feita de wi-fi e dados móveis, porque eu sinto uma conexão muito forte.",
    "Namorar você é ótimo, o único problema é dividir o controle da TV.",
    "Se eu fosse uma função, você seria meu único argumento obrigatório.",
]

const jokeBtn = document.getElementById("jokeBtn")
const jokeText = document.getElementById("jokeText")
let piadaAnterior = -1

jokeBtn.addEventListener("click", () => {
    let indice
    do {
        indice = Math.floor(Math.random() * piadas.length)
    } while (indice === piadaAnterior && piadas.length > 1)

    piadaAnterior = indice
    jokeText.textContent = piadas[indice]
})
