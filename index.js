// ---------- corações flutuando no fundo (todas as páginas) ----------
const heartsBg = document.getElementById("heartsBg")

if (heartsBg) {
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
}

// ---------- contador de dias juntos (página inicial) ----------
const days = document.getElementById("days")

if (days) {
    const inicioNamoro = new Date(2024, 9, 22) // 22/10/2024
    const dias = Math.floor((new Date() - inicioNamoro) / (1000 * 60 * 60 * 24))
    days.textContent = dias
}

// ---------- joguinho "eu te amo?" (página do jogo) ----------
const sim = document.getElementById("opcyes")
const nao = document.getElementById("opcNo")

if (sim && nao) {
    const resp = document.getElementById("textinho")
    const imagem = document.getElementById("imagem")
    let estadoAnterior = -1

    nao.addEventListener("mouseenter", entrar)

    function entrar() {
        let min = 0
        let max = 7
        let estado

        do {
            estado = Math.floor(Math.random() * (max - min + 1)) + min
        } while (estado === estadoAnterior)

        estadoAnterior = estado

        sim.style.transform = "translate(+70px)"

        if (estado == 0) {
            nao.style.transform = "translate(100px, -60px)"
        }
        if (estado == 1) {
            nao.style.transform = "translate(100px, +60px)"
        }
        if (estado == 2) {
            nao.style.transform = "translate(-210px, +60px)"
        }
        if (estado == 3) {
            nao.style.transform = "translate(-210px, -60px)"
        }
        if (estado == 4) {
            nao.style.transform = "translate(+110px, +60px)"
        }
        if (estado == 5) {
            nao.style.transform = "translate(+110px, -60px)"
        }
        if (estado == 6) {
            nao.style.transform = "translate(-210px, +60px)"
        }
        if (estado == 7) {
            nao.style.transform = "translate(-210px, -60px)"
        }
    }

    sim.addEventListener("click", clicar)

    function clicar() {
        resp.textContent = "É claro que te amo meu amor!!!"
        sim.style.transform = "translate(0px)"
        nao.style.transform = "translate(0px, 0px)"

        imagem.innerHTML = '<img src="./nos.jpg" width="300" alt="Eu e a Milly">'

        resp.style.opacity = 1
        imagem.style.opacity = 1
    }
}

// ---------- cards de motivos (página de motivos) ----------
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped")
    })
})

// ---------- piadas ruins (página de piadas) ----------
const jokeBtn = document.getElementById("jokeBtn")

if (jokeBtn) {
    const jokeText = document.getElementById("jokeText")
    const piadas = [
        "Por que o casal apaixonado sempre carrega uma escada? Porque o amor deles tá em outro nível.",
        "Sabe qual o esporte favorito de casal? Namoro persistente.",
        "Meu amor por você é tipo wifi público: todo mundo vê, mas só você tem a senha.",
        "Se beleza fosse crime, você já estava presa desde 22/10/2024.",
        "Você deve ser feita de wi-fi e dados móveis, porque eu sinto uma conexão muito forte.",
        "Namorar você é ótimo, o único problema é dividir o controle da TV.",
        "Se eu fosse uma função, você seria meu único argumento obrigatório.",
    ]
    let piadaAnterior = -1

    jokeBtn.addEventListener("click", () => {
        let indice
        do {
            indice = Math.floor(Math.random() * piadas.length)
        } while (indice === piadaAnterior && piadas.length > 1)

        piadaAnterior = indice
        jokeText.textContent = piadas[indice]
    })
}
