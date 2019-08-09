

const btnAdd = document.querySelector(".button1_js")
const btnDelete = document.querySelector(".button2_js")
const h1 = document.querySelector(".h1")

const key = new Date().toISOString().slice(0, 10);
console.log(key)
let counter = 0;
h1.textContent = counter;
const addGlass = () => {
    console.log("dodaj szklankę")



    h1.textContent = counter
    if (counter < 20) {
        ++counter
        h1.textContent = counter;
        localStorage.setItem(key, h1.textContent)
    } else {
        counter = 20;
        alert("starczy Ci już")
    }
    console.log(localStorage)
}



const deleteGlass = () => {
    console.log("usuń szklankę")


    if (counter > 0) {
        --counter
        h1.textContent = counter;
        localStorage.setItem(key, h1.textContent)
    } else {
        counter = 0;
        h1.textContent = counter;
    }
    console.log(localStorage)
}



btnAdd.addEventListener("click", addGlass)
btnDelete.addEventListener("click", deleteGlass)