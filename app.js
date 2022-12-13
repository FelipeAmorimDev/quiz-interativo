const quizForm = document.querySelector('.quiz-form');
const correctAnswers = ['C', 'A', 'C', 'C'];
const result = document.querySelector('.result');

quizForm.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [
    quizForm.inputQuestion1.value,
    quizForm.inputQuestion2.value,
    quizForm.inputQuestion3.value,
    quizForm.inputQuestion4.value,
  ];

  userAnswers.forEach((answer, i) => {
    if (answer === correctAnswers[i]) {
      score += 25;
    }
  });

  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

  const resultContainer = result.querySelector('span');
  result.classList.remove('d-none');

  let counter = 0;
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    
    resultContainer.textContent = `${counter}%`;
    counter++
  }, 20);

});
