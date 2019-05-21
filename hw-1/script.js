'use strict';

//================ Модуль - 01 ==============

//=================Задача-01 ==========

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
const adminEntrance = prompt('Введите пароль администратора:');
if (adminEntrance === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (adminEntrance === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

// =============  Задача-02  ==========

const credits = 23580;
const pricePerDroid = 3000;
const howManyDroid = prompt('Сколько дроидов вы хотите купить?');
let totalPrice = pricePerDroid * Number(howManyDroid);
let message;
if (howManyDroid === null) {
  alert('Отменено пользователем!');
} else if (credits > totalPrice) {
  message = `Вы купили ${howManyDroid} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
} else if (credits < totalPrice) {
  message = 'Недостаточно средств на счету!';
}

console.log(message);

//=============== Задача-3 ==========

let message;
const choiseCountry =
  'Введетите страну доставки: Китай, Южная Америка, Австралия, Индия, Ямайка';
let order = prompt(choiseCountry);
order = order.toLowerCase();
switch (order) {
  case 'китай':
    message = 'Доставка в Китай будет стоить 100 кредитов';
    break;

  case 'южная америка':
    message = 'Доставка в Южную Америку будет стоить 250 кредитов';
    break;

  case 'австралия':
    message = 'Доставка в Австралию будет стоить 170 кредитов';
    break;

  case 'индия':
    message = 'Доставка в Индию будет стоить 80 кредитов';
    break;

  case 'ямайка':
    message = 'Доставка в Ямайку будет стоить 120 кредитов';
    break;

  default:
    message = 'В вашей стране доставка не доступна';
}
console.log(message);
