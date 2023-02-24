const textConatiner = document.querySelector(".desc")
let btns = document.querySelectorAll(".btn");
let cards = document.querySelectorAll(".card-text");
let cardTitle = document.querySelectorAll(".card-title")
let curYear = document.querySelector(".year");
let info = [
    {
        tile: "",
        content: ""
    },
    {
        title: "Experience",
        content: ["", "","", "", ""]
    }
]

document.addEventListener("DOMContentLoaded", () =>{
    let year = new Date().getFullYear();
    curYear.innerHTML = year;


})




btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        for(let i = 0; i < cardTitle.length; i++){
            cards[i].classList.remove("active");
            btns[i].classList.remove("color");
            if(btn.dataset.id == cardTitle[i].innerHTML){
                cardTitle[i].parentNode.classList.add("active")
                btn.classList.add("color");
            }
        }
    })
})
