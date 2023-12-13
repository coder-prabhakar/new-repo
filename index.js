// NAVBAR
const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector(".header nav")

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-xmark');
    navBar.classList.toggle("active")
}

// HOME HEIGHT
const home = document.getElementById('home');
const homeHeight = window.innerHeight;
home.style.height = homeHeight+"px";

// searchBar, Cart, Profile pop box 
function popactive(popClassName){
    let popBox = document.querySelectorAll(".popBox");
    if(popClassName.classList.contains("active")){
        popBox.forEach((container) => {
            container.classList.remove("active");
        });
    } else {
        popBox.forEach((container) => {
            container.classList.remove("active");
        });
        popClassName.classList.add("active")
    }
}


// add to cart function
const cart = document.getElementById("cartBox");
function addToCart(imageUrl, imageTitle) {
    let newDiv = document.createElement("div");
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    imageDiv.style.backgroundImage = `url(${imageUrl})`;
    newDiv.appendChild(imageDiv)
    let titleP = document.createElement("p");
    titleP.classList.add("title");
    titleP.textContent = `${imageTitle}`;
    newDiv.appendChild(titleP)
    let newI = document.createElement("i");
    newI.setAttribute("class","fa-solid fa-trash-can")
    newI.setAttribute("onclick","removeCart(this)")
    newDiv.appendChild(newI);
    cart.appendChild(newDiv)
}

function removeCart(currentElement){
    currentElement.parentElement.remove();
}