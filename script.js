// ---- BUTTON FUNCTIONALITY ---- //
// ---- We are using the Button ID's ---- //
// ---- The function should contain the card Div ID name ---- //

const startGame = document.querySelector('#begin');
const questOne = document.querySelector('#goToOne');
const questTwo = document.querySelector('#goToTwo');
const questThree = document.querySelector('#goToThree');
const newGame = document.querySelector('#restart');

const begin = () => {
	instructions.style.display = 'block';
	intro.style.display = 'none';
};
startGame.addEventListener('click', begin);

const goToOne = () => {
	questionOne.style.display = 'block';
	instructions.style.display = 'none';
};
questOne.addEventListener('click', goToOne);

const goToTwo = () => {
	questionTwo.style.display = 'block';
	questionOne.style.display = 'none';
};
questTwo.addEventListener('click', goToTwo);

const goToThree = () => {
	questionThree.style.display = 'block';
	questionTwo.style.display = 'none';
};
questThree.addEventListener('click', goToThree);

// // ----- RESET FIELD ----- //
// // ----Resets point count, clears feedback, takes user back to the beginning--------- //

const restart = () => {
	intro.style.display = 'block';
	questionThree.style.display = 'none';
	pointsEarned.innerText = 'Points Earned: 0';
	addPoints = 0;
	playerFeedbackOne.innerText = '';
	playerFeedbackTwo.innerText = '';
	playerFeedbackThree.innerText = '';
};
newGame.addEventListener('click', restart);

const playerFeedbackOne = document.querySelector('#questionOneAnswer');
const playerFeedbackTwo = document.querySelector('#questionTwoAnswer');
const playerFeedbackThree = document.querySelector('#questionThreeAnswer');

// // // ---- ANSWER SELECTION ---- //

let addPoints = 0;
const answers = document.querySelectorAll('.questioncard');

// // ---- This could be C&P for each question card. Can't figure out how to make this loop through all the cards.
answers[0].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackOne.innerText =
			'Yay, you guessed correctly! Click the next button to continue.';
	} else if (event.target.dataset.increment == 0) {
		playerFeedbackOne.innerText =
			'Oops! Red Tailed Hawks are birds of prey because they hunt smaller animals.'; // // Not sure if I want an alert like this.
	}
});

answers[1].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackTwo.innerText =
			'Yay, you guessed correctly! Click the next button to continue.';
	} else if (event.target.dataset.increment == 0) {
		playerFeedbackTwo.innerText =
			"Oops! Primary colors are Red, Yellow, and Blue because other colors can't be mixed to create them. Click the next button to continue";
	}
});

answers[2].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackThree.innerText =
			'Yay, you guessed correctly! Click the next button to continue.';
	} else if (event.target.dataset.increment == 0) {
		playerFeedbackThree.innerText =
			'Oops! Argentina is a country within South America, while Africa and Asia are continents.'; // // Not sure if I want an alert like this.
	}
});

// // --------- SCORE CARD ---------- //
const pointsEarned = document.querySelector('h3');
const score = document.querySelector('#score');
score.appendChild(pointsEarned);
pointsEarned.style.textAlign = 'center';

// // ---- SELECTING ANSWERS ---- //
// // Coding below is absolutely wrong, just trying to get general point across
// function chooseAnswer (correct, incorrect) {
// 	if (event.target == answerA || answerF || answerH) {
// 		yay you did it!
// 	} else if (event.target != answerA || answerF || answerH) {
// 		oops!!
// 	}
// }

// // -------- OTHER PSUEDO CODE  ------ //
// function chooseAnswer() {
//     if (answer == 10) {
// 		innerText = "congrats!"
//     } else if (answer != 10) {
//      innerText = "Oops, that's not the right answer! The correct answer is a!"
//     }
// }

// // ---- ATTEMPTING TO CODE ---- //
// questionOneChoices.addEventListener("click", answer)
// let questionOneChoices = answerA
// if (event.click.questionOneChoices == answerA) {
// 	console.log("Correct!!");
// } else if (click.questionchoices != answerA) {
// 	console.log("Oops!!");
// }

// --- Need to get the cards to overlap on top of each other upon clicking a new one -- DONE -- //

// --- use innHTML to clear out info in the current overlayed card and display if the player got the correct answer. -- DONE -- //
// --- if answerPicked === answerA (congrats you did it!)
// --- else answerPicked != answerA (Oops! The correct answer is `${answerA}`)
