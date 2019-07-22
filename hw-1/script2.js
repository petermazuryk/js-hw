// =============  Задача-02  ==========
'use strict';

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
