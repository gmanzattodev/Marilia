/* header - mobile */

const menu = document.querySelector(".header i");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("nav");
});
/* animacao - de entrada */
gsap.registerPlugin(ScrollTrigger)

const navegacao = document.querySelectorAll("#nav > li")

gsap.from(".logo-header", {
    opacity: 0,
    duration: 2
})
gsap.from(navegacao, {
    opacity: 0,
    duration: 1,
    y: -100,
    stagger: 0.2
})

const subtitulo = new SplitText(".subtitulo", {
    types: "chars"
})
const titulo = new SplitText(".titulo", {
    types: "chars"
})
const descricao = new SplitText(".descricao", {
    types: "chars"
})


const tl = gsap.timeline()
tl.from(subtitulo.chars, {
    opacity: 0,
    duration: 1,
    ease: "back.out",
    y: 50,
    stagger: 0.02
}, 0)
.from(titulo.chars, {
    opacity: 0,
    y: 30,
    stagger: 0.02,
    duration: 1
}, 0.5)
.from(descricao.chars, {
    opacity: 0,
    stagger: 0.01,
    duration: 1,
    y: 10
}, 0.7)

const btn_hero = document.querySelectorAll(".btn-hero button")

gsap.from(btn_hero, {
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    y: 20
})

/* animacao quando rolar pagina muda de cor o header */
const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
    const y = scrollY

    if(y >= 100){
        header.classList.add("block")
    } else {
        header.classList.remove("block")
    }
})
/* Serviços - clica no botao muda de pagina */
const buttons = document.querySelectorAll(".buttons");
const secoes = document.querySelectorAll(".secao");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const nomeDaSecao = button.dataset.section;

        buttons.forEach((item) => {
            item.classList.remove("active");
        });
        button.classList.add("active");

        secoes.forEach((secao) => {
            secao.classList.remove("ativa");
        });

        

        const secaoSelecionada = document.getElementById(nomeDaSecao);

        if (secaoSelecionada) {
            secaoSelecionada.classList.add("ativa");
        }
    });
    
});

function atualizarBotoes() {
    buttons.forEach(btn => btn.style.display = "");

    if (window.innerWidth <= 1200) {
        buttons[6].style.display = "none";
    }

    if (window.innerWidth <= 1000) {
        buttons[5].style.display = "none";
    }

    if (window.innerWidth <= 950) {
        buttons[4].style.display = "none";
    }

    if (window.innerWidth <= 850) {
        buttons[3].style.display = "none";
    }
    if (window.innerWidth <= 750) {
        buttons[2].style.display = "none";
    }
    if (window.innerWidth <= 550) {
        buttons[1].style.display = "none";
    }
}

window.addEventListener("resize", atualizarBotoes);
atualizarBotoes();

/* menu - Serviços mobile */
const menu_pagina = document.querySelector(".menu-pagina")
const mobile = document.querySelectorAll(".mobile")
let aberto = true

menu_pagina.addEventListener("click", () => {
    aberto = !aberto
    mobile.forEach((button) => {
        button.style.display = aberto ? "flex" : "none"
    })
})

mobile.forEach((button) => {
    button.addEventListener("click", () => {
        mobile.forEach((btn) => {
            btn.style.display = "none"
        })
    })
})

