const cards = document.querySelectorAll(".card")

function shuffleCards(){
    cards.forEach(card =>{
        const randomPos = Math.trunc(Math.random() * 12)
        console.log(randomPos);
        card.style.order = randomPos;
    })
}
shuffleCards()

cards.forEach(card => card.addEventListener("click", flipACard))

let cardsPicked = []

function flipACard(e){
 saveCard(e.target.children[0], e.target.getAttribute("data-attr"))
}

function saveCard(el, value){

    el.classList.add("active");
    cardsPicked.push({el,value})
    console.log(cardsPicked);
}