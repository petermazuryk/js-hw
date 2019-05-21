'use strict';

////=========== Модуль 2===============

// ============  ДЗ№1 =================

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число:');

  if (input === null) {
    break;
  }

  input = Number(input);
  numbers.push(input);
}

for (const num of numbers) {
  total += num;
}
console.log(`Общая сумма чисел равна ${total}`);

// ================= ДЗ №2 =======================

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let i = 1;

while (i <= attemptsLeft) {
  let input = prompt('Введите пароль:');

  if (input === null) {
    break;
  }
  if (passwords.includes(input)) {
    alert('Добро пожаловать!');
    break;
  } else if (i < attemptsLeft) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft - i} попыток`);
  } else {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  }
  i += 1;
}
