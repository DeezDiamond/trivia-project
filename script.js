// ---- BUTTON FUNCTIONALITY ---- //
// ---- We are using the Button ID's ---- //
// ---- The function should contain the card Div ID name ---- //

const startGame = document.querySelector("#begin")
const questOne = document.querySelector('#goToOne');
const questTwo = document.querySelector("#goToTwo")
const questThree = document.querySelector("#goToThree")
const newGame = document.querySelector('#instructions')

const begin = () => {
    instructions.style.display = "block"
}
startGame.addEventListener("click", begin)

const goToOne = () => {
    questionOne.style.display = "block"
}
questOne.addEventListener("click", goToOne)

const goToTwo = () => {
	questionTwo.style.display = 'block';
};
questTwo.addEventListener('click', goToTwo);

// --- Need to get the cards to overlap on top of each other upon clicking a new one -- //