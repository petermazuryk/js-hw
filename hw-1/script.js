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
