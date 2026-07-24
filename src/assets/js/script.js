const menu = document.querySelector(".header i");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("nav");
});

const texto = document.querySelectorAll(".texto")
const descricao = document.querySelector(".descricao")
const text = new SplitText(texto, {
    types: "chars"
})
const desc = new SplitText(descricao, {
    types: "chars"
})


const tl = gsap.timeline();

tl.from(".sub-topico", {
    opacity: 0,
    y: 50,
    duration: 1
}, 0)
.from(text.chars, {
    opacity: 0,
    stagger: 0.02,
    duration: 0.5,
    y: 50
}, 0)
.from(desc.chars, {
    opacity: 0,
    y: 10,
    duration: 0.2,
    stagger: 0.02
}, 0)
.fromTo(".btn-hero", {
    opacity: 0,
    y: 100
}, {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "back.out"
}, 0)

const header = document.querySelectorAll("#nav > li")

gsap.from(header, {
    stagger: 0.2,
    duration: 1,
    opacity: 1,
    y: -100
})
const hero = document.querySelector(".info-hero")

const time = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true
    }
})

time.to(hero, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "none",
    pointerEvents: "none",
}, 0)
.to(".secundary", {
    opacity: 1,
    duration: 1,
    y: -100,
    ease: "none",
    pointerEvents: "auto",
    visibility: "visible"
}, 1.5)




