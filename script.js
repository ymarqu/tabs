const textConatiner = document.querySelector(".desc")
let btns = document.querySelectorAll(".btn");
let cards = document.querySelectorAll(".card-text");
let curYear = document.querySelector(".year");


document.addEventListener("DOMContentLoaded", () =>{
    let year = new Date().getFullYear();
    curYear.innerHTML = year;
});


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(b => {
            b.classList.remove("color");
            btn.classList.add("color");
        })
    let id = btn.dataset.id;
    cards.forEach(card => {
        card.classList.remove("active");
    })
    let container = document.getElementById(id);
    container.classList.add("active");
    });
});
