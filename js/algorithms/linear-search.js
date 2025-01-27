
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

function checkGuess() {
    const userGuess = Number(guessField.value);

    // عرض التخمينات السابقة
    if (guessCount === 1) {
        guesses.textContent = 'التخمينات السابقة: ';
    }
    guesses.textContent += userGuess + ' ';

    // التحقق من صحة التخمين
    if (userGuess === randomNumber) {
        lastResult.textContent = 'تهانينا! لقد حصلت عليه بشكل صحيح!';
        lastResult.style.backgroundColor = 'green';
        endGame();
    } else if (guessCount === maxGuesses) {
        lastResult.textContent = '!!!انتهت اللعبة!!!';
        endGame();
    } else {
        lastResult.textContent = 'خطأ!';
        lastResult.style.backgroundColor = 'orange';

        // hint
        if (userGuess < randomNumber) {
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

guessSubmit.addEventListener('click', checkGuess);

function endGame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    // إعادة تعيين اللعبة
    const resetButton = document.createElement('button');
    resetButton.textContent = 'ابدأ لعبة جديدة';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // إعادة تعيين العناصر
    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';

    // تفعيل
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    // إزالة الزر
    document.querySelector('button').remove();
    document.querySelector('.lastResult').style.backgroundColor = '#61dafb';
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}