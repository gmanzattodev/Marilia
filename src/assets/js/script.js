const menu = document.querySelector(".header i");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("nav");
});

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


const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
    const y = scrollY

    if(y >= 100){
        header.classList.add("block")
    } else {
        header.classList.remove("block")
    }
})