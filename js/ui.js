const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

function updateUI(result, userGuess) {
    if (guessCount === 1) {
        guesses.textContent = 'التخمينات السابقة: ';
    }
    guesses.textContent += userGuess + ' ';

    if (result === 'correct') {
        lastResult.textContent = 'تهانينا! لقد حصلت عليه بشكل صحيح!';
        lastResult.style.backgroundColor = 'green';
    } else if (result === 'gameOver') {
        lastResult.textContent = '!!!انتهت اللعبة!!!';
    } else {
        lastResult.textContent = 'خطأ!';
        lastResult.style.backgroundColor = 'orange';
        lowOrHi.textContent = result === 'low' ? 'آخر تخمين كان منخفضًا 🔴 جدًا!' : 'آخر تخمين كان مرتفعًا 🟢 جدًا!';
    }
}

function resetUI() {
    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = '#61dafb';
}
