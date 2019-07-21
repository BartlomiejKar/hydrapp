console.log("działa")

const btnAdd = document.querySelector(".button1_js")
const btnDelete = document.querySelector(".button2_js")
const h1 = document.querySelector(".h1")


let counter = 0;
h1.textContent = counter;
const addGlass = () => {
    console.log("dodaj szklankę")

    console.log(counter)

    h1.textContent = counter
    if (counter < 20) {
        ++counter
        h1.textContent = counter;
    } else {
        counter = 20;
        alert("starczy Ci już")
    }
}


const deleteGlass = () => {
    console.log("usuń szklankę")


    if (counter > 0) {
        --counter
        h1.textContent = counter;
    } else {
        counter = 0;
        h1.textContent = counter;
    }
}


btnAdd.addEventListener("click", addGlass)
btnDelete.addEventListener("click", deleteGlass)