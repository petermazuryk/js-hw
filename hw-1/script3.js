//=============== Задача-3 ==========
'use strict';

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
