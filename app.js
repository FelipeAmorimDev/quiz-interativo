const quizForm = document.querySelector('.quiz-form');
const correctAnswers = ['C', 'A', 'C', 'C'];
const result = document.querySelector('.result');

let score = 0;

const getUserAnswers = () => {
  let userAnswers = []

  correctAnswers.forEach((_, i) => {
    userAnswers.push(quizForm[`inputQuestion${i + 1}`].value)
  })

  return userAnswers
}

const setFinalScore = userAnswers => {
    userAnswers.forEach((userAnswer, i) => {
    const isACorrectAnswer = userAnswer === correctAnswers[i];

    if (isACorrectAnswer) {
      score += 25;
    }
  });
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  result.classList.remove('d-none');
}

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      score = 0;
      clearInterval(timer);
    }

    result.querySelector('span').textContent = `${counter}%`;
    counter++
  }, 20);
}

quizForm.addEventListener('submit', event => {
  event.preventDefault();

  const userAnswers = getUserAnswers();
  setFinalScore(userAnswers)
  showFinalScore()
  animateFinalScore()
});
