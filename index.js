// ---------- corações flutuando no fundo ----------
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

// ---------- contador de dias juntos ----------
const days = document.getElementById("days")

if (days) {
    const inicioNamoro = new Date(2024, 9, 22) // 22/10/2024
    const dias = Math.floor((new Date() - inicioNamoro) / (1000 * 60 * 60 * 24))
    days.textContent = dias
}
