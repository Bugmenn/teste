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
    const area = document.getElementById("area")
    const resp = document.getElementById("textinho")
    const imagem = document.getElementById("imagem")
    let estadoAnterior = -1

    nao.addEventListener("mouseenter", entrar)
    // no celular não existe "hover" de verdade, então o toque também precisa
    // fazer o botão fugir antes que o toque vire um clique
    nao.addEventListener(
        "touchstart",
        (evento) => {
            evento.preventDefault()
            entrar()
        },
        { passive: false }
    )

    function entrar() {
        // calcula o quanto o botão pode se mover sem sair da caixa,
        // usando o tamanho real da tela (funciona no mobile também)
        const areaRect = area.getBoundingClientRect()
        const naoRect = nao.getBoundingClientRect()
        const margem = 8
        const maxX = Math.max((areaRect.width - naoRect.width) / 2 - margem, 20)
        const maxY = Math.max((areaRect.height - naoRect.height) / 2 - margem, 20)

        let min = 0
        let max = 7
        let estado

        do {
            estado = Math.floor(Math.random() * (max - min + 1)) + min
        } while (estado === estadoAnterior)

        estadoAnterior = estado

        sim.style.transform = `translate(${maxX * 0.6}px)`

        const posicoes = [
            [maxX, -maxY],
            [maxX, maxY],
            [-maxX, maxY],
            [-maxX, -maxY],
            [maxX * 0.5, maxY],
            [maxX * 0.5, -maxY],
            [-maxX * 0.5, maxY],
            [-maxX * 0.5, -maxY],
        ]

        const [x, y] = posicoes[estado]
        nao.style.transform = `translate(${x}px, ${y}px)`
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
