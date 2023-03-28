// --------------HAMBURGER MENU------------------
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("active");
    logo.classList.toggle("active");
});


// ------------FILTERING CARDS------------------
document.querySelector("#filterCoding").addEventListener("change", filterCoding);
document.querySelector("#filterDesign").addEventListener("change", filterDesign);
document.querySelector("#filterMarketing").addEventListener("change", filterMarketing);


function hideAll(){
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        card.style.display = "none";
    });
}

function showAll(){
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        card.style.display = "inline-block";
    });
}

function filterCoding(){
    hideAll();

    if(document.querySelector("#filterCoding").checked){
        const codingCards = document.querySelectorAll(".coding");

        codingCards.forEach(codingCard => {
            codingCard.style.display = "inline-block";
        });

        document.querySelector("#filterDesign").checked = false;
        document.querySelector("#filterMarketing").checked = false;
        document.querySelector(".load-more").style.display = "none";
    } else {
        showAll();
        document.querySelector(".load-more").style.display = "inline-block";
        for (let i = initialCards; i < container.children.length; i++) {
            container.children[i].style.display = "none";
          }
    }
}

function filterMarketing(){
    hideAll();

    if(document.querySelector("#filterMarketing").checked){
        const marketingCards = document.querySelectorAll(".marketing");

        marketingCards.forEach(marketingCard => {
            marketingCard.style.display = "inline-block";
        });

        document.querySelector("#filterDesign").checked = false;
        document.querySelector("#filterCoding").checked = false;
        document.querySelector(".load-more").style.display = "none";
    } else {
        showAll();
        document.querySelector(".load-more").style.display = "inline-block";
        for (let i = initialCards; i < container.children.length; i++) {
            container.children[i].style.display = "none";
          }
    }
}

function filterDesign(){
    hideAll();

    if(document.querySelector("#filterDesign").checked){
        const designCards = document.querySelectorAll(".design");

        designCards.forEach(designCard => {
            designCard.style.display = "inline-block";
        });

        document.querySelector("#filterMarketing").checked = false;
        document.querySelector("#filterCoding").checked = false;
        document.querySelector(".load-more").style.display = "none";
    } else {
        showAll();
        document.querySelector(".load-more").style.display = "inline-block";
        for (let i = initialCards; i < container.children.length; i++) {
            container.children[i].style.display = "none";
          }
    }
}


document.querySelector("#filterCoding").addEventListener("change", activeCoding);
document.querySelector("#filterDesign").addEventListener("change", activeDesign);
document.querySelector("#filterMarketing").addEventListener("change", activeMarketing);

function activeCoding(){
    document.querySelector(".codingLabel").classList.toggle("active");
    document.querySelector(".marketingLabel").classList.remove("active");
    document.querySelector(".designLabel").classList.remove("active");
}

function activeDesign(){
    document.querySelector(".designLabel").classList.toggle("active");
    document.querySelector(".codingLabel").classList.remove("active");
    document.querySelector(".marketingLabel").classList.remove("active");
}


function activeMarketing(){
    document.querySelector(".marketingLabel").classList.toggle("active");
    document.querySelector(".designLabel").classList.remove("active");
    document.querySelector(".codingLabel").classList.remove("active");
}


// ------------------LOAD MORE--------------------
const container = document.querySelector(".grid");
const loadMore = document.querySelector(".load-more");
let initialCards = 6;
const loadCards = 6;

for (let i = initialCards; i < container.children.length; i++) {
  container.children[i].style.display = "none";
}

loadMore.addEventListener("click", loadMoreCards);

function loadMoreCards(){
    for (let i = initialCards; i < initialCards + loadCards; i++) {
        if (i >= container.children.length) {
          loadMore.style.display = "none";
          break;
        }
        container.children[i].style.display = "block";
      }
      initialCards += loadCards;
}

  


