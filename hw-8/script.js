'use strict';
import quizData from './quiz-data.js';

const testForm = document.querySelector('.js-question-form');
console.log(testForm);
const buttonCheck = document.querySelector('.check');

const test = createForm(quizData);
testForm.insertBefore(test, buttonCheck);
// Создаем форму теста
function createForm({ title, questions }) {
  const titleForm = document.createElement('h1');
  titleForm.classList.add('form-title');
  titleForm.textContent = title;

  const container = document.createElement('section');
  container.classList.add('section-form');
  container.appendChild(titleForm);
  // Создаем форму ответов
  questions.map((question, questionIdx) => {
    const questionList = document.createElement('section');
    questionList.classList.add('form-question');

    const questionTitle = document.createElement('h3');
    questionTitle.classList.add('questions-title');
    questionTitle.textContent = `${questionIdx + 1}. ${question.question}`;

    const answersList = document.createElement('ol');
    answersList.classList.add('answer-list');

    container.append(questionList);
    questionList.append(questionTitle, answersList);
    // questionList.appendChild();
    // Разметка ответов формы
    question.choices.map((choice, choiceIdx) => {
      const formSelectAnswers = document.createElement('li');
      const formLabel = document.createElement('label');
      const formInput = document.createElement('input');
      formInput.setAttribute('type', 'radio');
      formInput.setAttribute('value', `${choiceIdx + 1}`);
      formInput.setAttribute('name', `question${questionIdx + 1}`);

      answersList.append(formSelectAnswers);
      formSelectAnswers.append(formLabel);
      formLabel.append(formInput, document.createTextNode(choice));
    });
  });
  return container;
}

testForm.addEventListener('submit', handleSubmit);

const data = {};
let corectAnswer;
let incorectAnswer;
let resultMessage;

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => {
    data[name] = value;
  });
  checkResult(data);
}

function checkResult(result) {
  const userAnswer = Object.values(result);
  corectAnswer = 0;
  incorectAnswer = 0;
  userAnswer.forEach((answer, i) => {
    if (Number(answer) === quizData.questions[i].answer) {
      corectAnswer += 1;
    } else {
      incorectAnswer += 1;
    }
  });

  const inPercentage = (corectAnswer / quizData.questions.length) * 100;

  if (inPercentage < 80) {
    resultMessage = `Вы ответили не правильно на ${incorectAnswer} вопросов.`;
  } else {
    resultMessage = `Вы ответили правильно на ${corectAnswer} вопросов.`;
  }

  alert(resultMessage);
}
