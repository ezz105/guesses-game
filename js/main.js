let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("✍️✍️✍️ ~ randomNumber:", randomNumber);

let guessCount = 1;
const maxGuesses = 10;

// DOM
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

function checkGuess(userGuess) {
    if (guessCount === 1) {
        guesses.textContent = 'التخمينات السابقة: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        return 'correct';
    } else if (guessCount === maxGuesses) {
        return 'gameOver';
    } else {
        return userGuess < randomNumber ? 'low' : 'high';
    }
}

function updateUI(result, userGuess) {
    switch (result) {
        case 'correct':
            lastResult.textContent = 'تهانينا! لقد حصلت عليه بشكل صحيح!';
            lastResult.style.backgroundColor = 'green';
            break;
        case 'gameOver':
            lastResult.textContent = '!!!انتهت اللعبة!!!';
            break;
        default:
            lastResult.textContent = 'خطأ!';
            lastResult.style.backgroundColor = 'orange';
            lowOrHi.textContent = result === 'low' ? 'آخر تخمين كان منخفضًا 🔴 جدًا!' : 'آخر تخمين كان مرتفعًا 🟢 جدًا!';
            break;
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', () => {
    const userGuess = Number(guessField.value);
    const result = checkGuess(userGuess);
    updateUI(result, userGuess);

    if (result === 'correct' || result === 'gameOver') {
        endGame();
    }
});

function endGame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    const resetButton = document.createElement('button');
    resetButton.textContent = 'ابدأ لعبة جديدة';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', () => {
        resetGame();
        resetUI();
        guessField.disabled = false;
        guessSubmit.disabled = false;
        resetButton.remove();
    });
}

function resetGame() {
    guessCount = 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';

    guessField.value = '';
    guessField.focus();
}

function resetUI() {
    document.querySelector('.lastResult').style.backgroundColor = '#61dafb';
}