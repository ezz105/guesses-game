let randomNumber = Math.floor(Math.random() * 100) + 1 ;
console.log("✍️✍️✍️ ~ randomNumber:", randomNumber)


let guessCount = 1;

const maxGuesses = 10;

// DOM

const guessesField =  document.querySelector('.guessesField');
const guessSubmit =  document.querySelector('.guessSubmit');
const guesses =  document.querySelector('.guesses');
const lastResult =  document.querySelector('.lastResult');
const lowOrHi =  document.querySelector('.lowOrHi');



function checkGuess(userGuess) {
    // عرض التخمينات السابقة
    if (guessCount === 1) {
        guesses.textContent = 'التخمينات السابقة: ';
    }
    guesses.textContent += userGuess + ' ';

    // التحقق من صحة التخمين
    if (userGuess === randomNumber) {
        return 'correct';
    } else if (guessCount === maxGuesses) {
        return 'gameOver';
    } else {
        return 'wrong';
    }
}

function updateUI(result, userGuess) {
    if (result === 'correct') {
        lastResult.textContent = 'تهانينا! لقد حصلت عليه بشكل صحيح!';
        lastResult.style.backgroundColor = 'green';
    } else if (result === 'gameOver') {
        lastResult.textContent = '!!!انتهت اللعبة!!!';
    } else {
        lastResult.textContent = 'خطأ!';
        lastResult.style.backgroundColor = 'orange';

        // hint
        if(userGuess  < randomNumber) {
            lowOrHi.textContent = 'آخر تخمين كان منخفضًا 🔴 جدًا!';
        } else {
            lowOrHi.textContent = 'آخر تخمين كان مرتفعًا 🟢 جدًا!';
        }
    }

    // تحديث عدد التخمينات
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

    // إعادة تعيين العناصر
    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';

    // تفعيل
    guessField.value = '';
    guessField.focus();
}

function resetUI() {
    document.querySelector('.lastResult').style.backgroundColor = '#61dafb';
}