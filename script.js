// ---- BUTTON FUNCTIONALITY ---- //
// ---- We are using the Button ID's ---- //
// ---- The function should contain the card Div ID name ---- //

const startGame = document.querySelector("#begin")
const questOne = document.querySelector('#goToOne');
const questTwo = document.querySelector("#goToTwo")
const questThree = document.querySelector("#goToThree")
const newGame = document.querySelector('#restart')

const begin = () => {
    instructions.style.display = "block"
    intro.style.display = "none"
}
startGame.addEventListener("click", begin)

const goToOne = () => {
    questionOne.style.display = "block"
    instructions.style.display = "none"
}
questOne.addEventListener("click", goToOne)

const goToTwo = () => {
    questionTwo.style.display = 'block';
    questionOne.style.display = "none"
};
questTwo.addEventListener('click', goToTwo);

const goToThree = () => {
    questionThree.style.display = "block"
    questionTwo.style.display = "none"
}
questThree.addEventListener("click", goToThree)

const restart = () => {
	intro.style.display = 'block';
	questionThree.style.display = 'none';
};
newGame.addEventListener('click', restart);




// --- Need to get the cards to overlap on top of each other upon clicking a new one -- //


// --- use innHTML to clear out info in the current overlayed card and display if the player got the correct answer. 
// --- if answerPicked === answerA (congrats you did it!)
// --- else answerPicked != answerA (Oops! The correct answer is `${answerA}`)