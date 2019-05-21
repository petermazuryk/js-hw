'use strict';

// ======== Модуль - 3 =====================

// ========  ДЗ-1 ===================

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const login = prompt('Введите свой логін: ');

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return logins;
  }
};

const isLoginValid = function(login) {
  const minLengthLogin = 4;
  const maxLengtLogin = 16;
  if (login.length >= minLengthLogin && login.length <= maxLengtLogin) {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginUnique(allLogins, login)) {
    alert('Такой логин уже используется!');
    return;
  } else if (isLoginValid(login)) {
    alert('Логин успешно добавлен!');
    logins.push(login);
  } else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};

addLogin(logins, login);
