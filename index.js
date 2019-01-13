const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let nextQuestion = questions[Math.floor(Math.random()*questions.length)];
const questionContainer = document.querySelector('.question-container');

function appendQuestion(question) {
  return questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(timeMs) {
  question = undefined;
  question = questions[0]
  appendQuestion(question);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(question);
    },timeMs)
  })
}

function removeQuestion() {
  return questionContainer.innerHTML = '';
}

function askQuestionThenRemoveQuestion(timeMs) {
  return askQuestionThen(timeMs).then(removeQuestion);
}

function trueAndFalseButtons() {
  return document.querySelectorAll(".btn.center-align");
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => button.classList.toggle('hide'));
    // if (button.classList.contains('hide')) {
    //   button.classList.remove('hide');
    // } else {
    //   button.classList.add('hide');
    // }
}

function both() {
  toggleTrueAndFalseButtons();
  askQuestionThenRemoveQuestion(5000);
}

function displayQuestionOnClick() {
  let askBtn = document.querySelector('a.btn');
  askBtn.addEventListener('click', both);
}
