const getHelp = document.querySelector("#begin")
const questOne = document.querySelector("#questionOne")
const questTwo = document.querySelector("#questionTwo")
const questThree = document.querySelector("#questionThree")
const newGame = document.querySelector('#instructions')

const begin = () => {
    instructions.style.display = "block"
}
getHelp.addEventListener("click", begin)