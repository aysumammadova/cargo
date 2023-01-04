const sign = document.querySelector(".sign")
const login = document.querySelector(".login")
const biznes = document.querySelector(".biznes")
const ferdi = document.querySelector(".ferdi-sexs")

const sign_form = document.querySelector(".sign_form")
const login_form = document.querySelector(".login_form")

const ferdi_sexs= document.querySelector(".ferdi-sexs-form")
const biznes_form = document.querySelector(".biznes-form")
const mainup=document.querySelector(".how-to-works-it")


const login_now =() =>{
    login_form.classList.remove("hidden")
    sign_form.classList.add("hidden")

}

login.addEventListener("click",login_now)
const sign_now = () =>{
    sign_form.classList.remove("hidden")
    biznes_form.classList.add("hidden")
    mainup.classList.add("hidden")

}


const sign_bizness = () =>{
    ferdi_sexs.classList.add("hidden")
    biznes_form.classList.remove("hidden")
    biznes.classList.add("color")
    console.log(7);
    ferdi.classList.add("color-hidden")
}

const ferdiSexs = () => {
    ferdi_sexs.classList.remove("hidden")
    biznes_form.classList.add("hidden")
    console.log(8);
     biznes.classList.remove("color")
     ferdi.classList.remove("color-hidden")
}

biznes.addEventListener('click',sign_bizness)

sign.addEventListener('click',sign_now)
ferdi.addEventListener('click',ferdiSexs)
