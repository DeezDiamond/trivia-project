// ---- BUTTON FUNCTIONALITY ---- //
// ---- We are using the Button ID's ---- //
// ---- The function should contain the card Div ID name ---- //

const startGame = document.querySelector('#begin');
const questOne = document.querySelector('#goToOne');
const questTwo = document.querySelector('#goToTwo');
const questThree = document.querySelector('#goToThree');
const questFour = document.querySelector("#goToFour");
const questFive = document.querySelector('#goToFive');
const questSix = document.querySelector('#goToSix');
const questSeven = document.querySelector('#goToSeven');
const finalScore = document.querySelector("#viewTally");
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

const goToFour = () => {
	questionFour.style.display = 'block';
	questionThree.style.display = 'none';
};
questFour.addEventListener('click', goToFour);

const goToFive = () => {
	questionFive.style.display = 'block';
	questionFour.style.display = 'none';
};
questFive.addEventListener('click', goToFive);

const goToSix = () => {
	questionSix.style.display = 'block';
	questionFive.style.display = 'none';
};
questSix.addEventListener('click', goToSix);

const goToSeven = () => {
	questionSeven.style.display = 'block';
	questionSix.style.display = 'none';
};
questSeven.addEventListener('click', goToSeven);

const viewTally = () => {
	finalTally.style.display = "block"
	questionSeven.style.display = "none"
	const correctTally = document.querySelector('#numCorrect');
	const oopsTally = document.querySelector('#numOops');
	correctTally.innerText = `You earned ${addPoints} points for the questions you answered correctly!`;
	oopsTally.innerText = `And you made an oops on ${oopsPoints} question(s)!`;
}
finalScore.addEventListener("click", viewTally)

// // ----- RESET FIELD ----- //
// // ----Resets point count, clears feedback, takes user back to the beginning--------- //

const restart = () => {
	intro.style.display = 'block';
	finalTally.style.display = 'none';
	pointsEarned.innerText = 'Points Earned: 0';
	addPoints = 0;
	oopsPoints = 0;
	playerFeedbackOne.innerText = '';
	playerFeedbackTwo.innerText = '';
	playerFeedbackThree.innerText = '';
	playerFeedbackFour.innerText = '';
	playerFeedbackFive.innerText = '';
	playerFeedbackSix.innerText = '';
	playerFeedbackSeven.innerText = '';
};
newGame.addEventListener('click', restart);

// // ---- ANSWER FEEDBACK ---- // 
// // Area where feedback on if the player selected a correct or wrong answer will populate
const playerFeedbackOne = document.querySelector('#questionOneAnswer');
const playerFeedbackTwo = document.querySelector('#questionTwoAnswer');
const playerFeedbackThree = document.querySelector('#questionThreeAnswer');
const playerFeedbackFour = document.querySelector('#questionFourAnswer');
const playerFeedbackFive = document.querySelector('#questionFiveAnswer');
const playerFeedbackSix = document.querySelector('#questionSixAnswer');
const playerFeedbackSeven = document.querySelector('#questionSevenAnswer');


// // ---- ANSWER SELECTION ---- //

let addPoints = 0;
let oopsPoints = 0;
const answers = document.querySelectorAll('.questioncard');

// // ---- This could be C&P for each question card. Can't figure out how to make this loop through all the cards, especially since each answer has individual feedback. 
answers[0].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackOne.innerText =
			'Yay, you guessed correctly! Click the next button to continue.';
	} else if (event.target.dataset.increment == 0) {
		oopsPoints += 1;
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
		oopsPoints += 1;
		playerFeedbackTwo.innerText =
			"Oops! Primary colors are Red, Yellow, and Blue. The easiest way to remember this is knowing that other colors can't be mixed to create them. Click the next button to continue";
	}
});

answers[2].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackThree.innerText =
			'Yay, you guessed correctly! Click the next button to continue.';
	} else if (event.target.dataset.increment == 0) {
		oopsPoints += 1;
		playerFeedbackThree.innerText =
			'Oops! Argentina is a country within the continent of South America. Africa and Asia are continents which contain countries.'; 
	}
});

answers[3].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackFour.innerText =
			'Yay, you guessed correctly!';
	} else if (event.target.dataset.increment == 0) {
		oopsPoints += 1;
		playerFeedbackFour.innerText =
			'Oops! So far we have learned JavaScript in SEIR. Java is computer software, and jQuery is a JavaScript library.';
	}
});

answers[4].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackFive.innerText = 'Yay, you guessed correctly!';
	} else if (event.target.dataset.increment == 0) {
		oopsPoints += 1;
		playerFeedbackFive.innerText =
			'Oops! Cinderella is the one who lost glass slippers. Mulan is a warrior, and let\'s hope Nala never wears shoes.';
	}
});

answers[5].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 20) {
		addPoints += 20;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackSix.innerText = 'Whoopie! You guessed the best animal, have a bonus!';
	} else if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackSix.innerText =
			'Yeah, those are pretty nice animals. Have some points!';
	}
});

answers[6].addEventListener('click', (event) => {
	if (event.target.dataset.increment == 10) {
		addPoints += 10;
		pointsEarned.innerText = `Points Earned: ${addPoints}`;
		playerFeedbackSeven.innerText = 'Yay, you guessed correctly!';
	} else if (event.target.dataset.increment == 0) {
		oopsPoints += 1;
		playerFeedbackSeven.innerText =
			'Oops! General Assembly has been transforming careers for people since 2011. The year 1969 is relevant to computer history though, look it up sometime.';
	}
});

// // --------- SCORE HEADING ---------- //
const pointsEarned = document.querySelector('h3');
const score = document.querySelector('#score');
score.appendChild(pointsEarned);
pointsEarned.style.textAlign = 'center';