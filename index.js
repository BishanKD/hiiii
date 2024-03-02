const yes = document.querySelector(".yes");
const no1 = document.querySelector("#no1");
const no2 = document.querySelector("#no2");
const no = document.querySelectorAll(".no");
const yay = document.querySelector(".yay");

const hide = (button) => {
    button.classList.toggle("hide");
}

const none = (button) => {
    button.classList.toggle("none")
}

no.forEach(button => {
    button.addEventListener("click", () => {
        hide(no1);
        hide(no2);
    })
})

yes.addEventListener("click", ()=>{
    none(yay);
})

