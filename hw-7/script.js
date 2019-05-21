// const string = 'JavaScript';
// console.log(string.toUpperCase());
// console.log(Number.isNaN(string));
// console.log(string.toUpperCase);
// const correctPassword = 'jqueryismyjam';
// const isComing = prompt('Введите пароль доступа');
// // console.log(isComing);
// if(isComing === correctPassword) {
// alert('Доступ в секретный бункер разрешен!');
// } else if (isComing === null) {
//   alert('Ожидаю ввода пароля');
// }else {
//   alert('Активирована система защиты!');
// }
// console.log (alert);

// switch (correctPassword) {
//   case 'jqueryismyjam':
//   alert('Доступ в секретный бункер разрешен!');
//   break;
  
//   case 'null':
//   alert('Ожидаю ввода пароля');
// }
// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients);
// clients[1] = 25;
// console.log(clients.length);
// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b);

// const names = ['niger', 'nigers'];
// console.log(names);
// names.push('bichka');
// console.log(names);
// names[2] = 'dura';
// console.log(names);

// const colors = ['red', 'green', 'blue'];

// // Следующая операция помещает один новый элемент перед вторым элементом.
// colors.splice(2, 0, 'purple');

// // Теперь массив цветов содержит четыре элемента
// // с новым элементом, вставленным во вторую позицию.
// console.log(colors);

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const iterable = 'javascript';

// for (const value of iterable) {
//   console.log(value);
// }


// for (var i = 0; i <= 5; i+=1) {
//   console.log(i+ ": Hello, JavaScript!");
// }

'use strict'

//================ Модуль - 01 ==============

//=================Задача-01

// const ADMIN_PASSWORD = 'm4ng0h4ckz';
// let message;
// const adminEntrance = prompt('Введите пароль администратора:');
// if (adminEntrance === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else if (adminEntrance === null) {
//   message = 'Отменено пользователем!';
// } else {
//   message = 'Доступ запрещен, неверный пароль!';
// }
// alert(message);

//=======================Задача-02

// const credits = 23580;
// const pricePerDroid = 3000;
// const howManyDroid = prompt('Сколько дроидов вы хотите купить?');
// let totalPrice = pricePerDroid * Number(howManyDroid);
// let message;
// if (howManyDroid === null) {
//   alert('Отменено пользователем!');
// } else if{
//    (credits > totalPrice) {
//     message = `Вы купили ${howManyDroid} дроидов, на счету осталось ${credits -
//       totalPrice} кредитов.`;
//   } else if (credits < totalPrice) {
//     message = 'Недостаточно средств на счету!';
//   }
// }
// console.log(message);


// =========================  Задача-3

// let message;
// const choiseCountry =
//   'Введетите страну доставки: Китай, Южная Америка, Австралия, Индия, Ямайка';
// let order = prompt(choiseCountry);
// order = order.toLowerCase();
// switch (order) {
//   case 'китай':
//     message = 'Доставка в Китай будет стоить 100 кредитов';
//     break;

//   case 'южная америка':
//     message = 'Доставка в Южную Америку будет стоить 250 кредитов';
//     break;

//   case 'австралия':
//     message = 'Доставка в Австралию будет стоить 170 кредитов';
//     break;

//   case 'индия':
//     message = 'Доставка в Индию будет стоить 80 кредитов';
//     break;

//   case 'ямайка':
//     message = 'Доставка в Ямайку будет стоить 120 кредитов';
//     break;

//   default:
//     message = 'В вашей стране доставка не доступна';
// }
// console.log(message);


// ====================МАСИВИ==================


// const clients = ['Mango', 'Poly', 'Ajax'];

// // Значение элемента можно заменить
// clients[0] = 'Kiwi';
// console.log(clients[0]); // Kiwi
// console.log(clients);

/*
* Есть массив имен пользователей
* Используя методы массива, последовательно выполнить указанные операции
*/

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// // Удалить первый элемент массива
// users.splice(0,1);
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // // Удалить последний элемент массива
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // // Добавить в начало массива пользователя "Lux"
// users.splice(0,0,"Lux");
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push("Jay", "Kiwi");
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// const index = users.indexOf(userToDelete);
// console.log(index);
// users.splice(index,1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// const index1 = users.indexOf(userToInsertBefore);
// users.splice(index1,0,"Kong");
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// var fruits = []; // создать массив

// // fruits[99999] = 5; // присвоить свойство с любым номером

// fruits.age = 25; 
// console.log(fruits);

// var store = {}; // объект для коллекции

// var items = ["div", "a", "form"];

// for (var i = 0; i < items.length; i+=1) {
//   var key = items[i]; // для каждого элемента создаём свойство
//   store[i] = key; // значение здесь не важно
// }
// console.log(store);

// const numbers = [];

// for (let i = 0; i < 10; i += 1) {
//   numbers.push(i);
// }

// console.log(numbers);

/*
* Есть массив имен пользователей users
*
* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента]. 
* 
* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
*
* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// for (let i = 0; i < users.length; i += 1) {
//   console.log(`${i+1}-${users[i]}`);
// };

/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// // В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = prompt('Введите цену: ');

// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// const words = message.split(' ')
// console.log(words);

// // Выведи в консоли длину массива words
// console.log( words.length); // 8

// // Вычисли сколько будет стоить гравировка и запиши результат в переменную price
// price=words.length*price;
// console.log(price); // 80


/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// for (const number of numbers) {
//   if (number > num) {
//     matched.push(number);
//   }
//   }

// console.log(matched); // [17, 14, 14, 32, 18, 26]






////=========== ДОМАШКА 2===============
              ////  ДЗ№1

// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt('Введите число:');

//   if (input === null) {
//     break;
//   }

//   input = Number(input);
//   numbers.push(input);
// }

// for (const num of numbers) {
//   total += num;
//   }
// console.log(`Общая сумма чисел равна ${total}`);

///////////////////  ДЗ №2

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attemptsLeft = 3;
// let i=1;

// while (i <= attemptsLeft) {
//   let input = prompt('Введите пароль:');
  
//   if (input === null) {
//     break;
//   }
//     if (passwords.includes(input)) {
//       alert('Добро пожаловать!');
//       break;
//     } 
//     else if (i < attemptsLeft) {
//       alert(`Неверный пароль, у вас осталось ${attemptsLeft - i} попыток`);
//     } else {
//       alert('У вас закончились попытки, аккаунт заблокирован!');
//       break;
//     }
//   i += 1;
// }

//////////////////////////////////////////

// ФУНКЦИИ

///////////////ДЗ-1

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// const login = prompt('Введите свой логін: ');
// // const allLogins = logins;

// const isLoginUnique = function(allLogins, login) {
//   if (allLogins.includes(login)) {
//     return logins;
//   }
// };

// const isLoginValid = function(login) {
//   const minLengthLogin = 4;
//   const maxLengtLogin = 16;
//   if (login.length >= minLengthLogin && login.length <= maxLengtLogin) {
//     return true;
//   }
// };

// const addLogin = function(allLogins, login) {
//   if (isLoginUnique(allLogins, login)) {
//     alert('Такой логин уже используется!');
//     return;
//   } else if (isLoginValid(login)) {
//     alert('Логин успешно добавлен!');
//     logins.push(login);
//     // console.log(logins);
//   } else {
//     alert('Ошибка! Логин должен быть от 4 до 16 символов');
//   }
// };

// addLogin(logins, login);




////////////////////// Обєкти/////////////////////////

// const fruitsByColor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pineapple'],
//   purple: ['grape', 'plum'],
// };

// function getFruitsWithColor(color) {
//   return fruitsByColor[color] || [];
// }


// console.log(getFruitsWithColor('purple'));

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };


// console.log(hotel.name);
// const keys = Object.keys(hotel);
// console.log(keys); //["name", "stars", "capacity"]
// const values = Object.values(hotel);
// console.log(values); //["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel);
// console.log(entries);

// const push = {id: 'id-1', name: 'Peter', surname: 'Mazuryk'};
// hotel.adres = [push];
// console.log(hotel);


/////////////////////////      ДЗ-1  ////////////
 
// const Priority = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };

// let newNotes = {
//   notes: [],
// };
// const notepad = {
//   notes: [],

//   getNotes() {
//     return this.notes;
//   },

//   findNoteById(id) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const findInNotesId = this.notes[i];
//       if (findInNotesId.id === id) {
//         return findInNotesId;
//       }
//     }
// },

//   saveNote(note) {
//     this.notes.push(note);
//     return this.notes;
// },

//   deleteNote(id) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const deleteInNoteId = this.notes[i];
//       if (deleteInNoteId.id === id) {
//         this.notes.splice(i, 1);
//       }
//     }
//   },

//   updateNoteContent(id, updatedContent) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const updateNoteId = this.notes[i];
//       if (updateNoteId.id === id) {
//         this.notes[i] = {...updateNoteId, ...updatedContent};
//        return updateNoteId;  
//       }
//     }
   
//   },

//   updateNotePriority(id, priority) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const updatePriority = this.notes[i];
//       if (updatePriority.id === id) {
//         updatePriority.priority = priority;
//        return updatePriority; 
//       }
//     }
    
//   },
//   filterNotesByQuery(query) {
//   for (let i = 0; i < this.notes.length; i += 1) {
//     const filterQuery = this.notes[i];
//     const filterQueryTitleLow = filterQuery.title.toLowerCase();
//     const filterQueryBodyLow = filterQuery.body.toLowerCase();
//     const queryLow = query.toLowerCase();
//     if (filterQueryTitleLow.includes(queryLow) || filterQueryBodyLow.includes(queryLow)) {
//       newNotes.notes.push(filterQuery);
//     }
//   }
//   return newNotes;
//   },

//   filterNotesByPriority(priority) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const filterPriority = this.notes[i];
//       if (filterPriority.priority === priority) {
//         newNotes.notes.priority = filterPriority.priority;
//         return newNotes;
//       }
//     }
//   },
// };

// notepad.saveNote({
//   id: 'id-1',
//   title: 'JavaScript essentials',
//   body:
//     'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//   priority: Priority.HIGH,
// });

// notepad.saveNote({
//   id: 'id-2',
//   title: 'Refresh HTML and CSS',
//   body:
//     'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//   priority: Priority.NORMAL,
// });
// console.log(notepad.notes);
// notepad.filterNotesByQuery('html');
// console.log(newNotes.notes);

// notepad.updateNoteContent('id-1', {title: 'Get comfy with React.js or Vue.js'});
// console.log(notepad.notes);

// notepad.updateNotePriority('id-2', Priority.LOW);
// console.log(notepad.notes);

// notepad.filterNotesByPriority(Priority.NORMAL);
// console.log(newNotes);

// notepad.updateNoteContent('id-1', {
//   body: 'Get comfy with React.js or Vue.js',
// });
// console.log(notepad.notes);



/////// Конструктор /////////////

//////////// ДЗ/////////////



// let newNotes = {
//   notes: [],
// };

// const NotepadEditor = function NotepadEditor (notes = []) {
//   this.notes = notes;
// };

// NotepadEditor.Priority = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };

// NotepadEditor.prototype.getNotes = function () {
//     return this.notes;
//   };

//   NotepadEditor.prototype.findNoteById = function (id) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const findInNotesId = this.notes[i];
//       if (findInNotesId.id === id) {
//         return findInNotesId;
//       }
//     }
// };

// NotepadEditor.prototype.saveNote = function (note) {
//     this.notes.push(note);
//     return note;
// };

// NotepadEditor.prototype.deleteNote = function (id) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const deleteInNoteId = this.notes[i];
//       if (deleteInNoteId.id === id) {
//         this.notes.splice(i, 1);
//       }
//     }
//   };

//   NotepadEditor.prototype.updateNoteContent = function (id, updatedContent) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const updateNoteId = this.notes[i];
//       if (updateNoteId.id === id) {
//         this.notes[i] = {...updateNoteId, ...updatedContent};
//        return updateNoteId;  
//       }
//     }
//   };

//   NotepadEditor.prototype.updateNotePriority = function (id, priority) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const updatePriority = this.notes[i];
//       if (updatePriority.id === id) {
//         updatePriority.priority = priority;
//        return updatePriority; 
//       }
//     }
// };


// NotepadEditor.prototype.filterNotesByQuery = function (query) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const filterQuery = this.notes[i];
//       const filterQueryTitleLow = filterQuery.title.toLowerCase();
//       const filterQueryBodyLow = filterQuery.body.toLowerCase();
//       const queryLow = query.toLowerCase();
//       if (filterQueryTitleLow.includes(queryLow) || filterQueryBodyLow.includes(queryLow)) {
//         newNotes.notes.push(filterQuery);
//       }
//     }
//     return newNotes;
//  };

//   NotepadEditor.prototype.filterNotesByPriority = function (priority) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const filterPriority = this.notes[i];
//       if (filterPriority.priority === priority) {
//         newNotes.notes.priority = filterPriority.priority;
//         return newNotes;
//       }
//     }
//   };

//   const initialNotes = [
//     {
//       id: 'id-1',
//       title: 'JavaScript essentials',
//       body:
//         'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//       priority: NotepadEditor.Priority.HIGH,
//     },
//     {
//       id: 'id-2',
//       title: 'Refresh HTML and CSS',
//       body:
//         'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//       priority: NotepadEditor.Priority.NORMAL,
//     },
//   ];
  
//   const notepad = new NotepadEditor(initialNotes);
  
//   /*
//    * Смотрю что у меня в заметках после инициализации
//    */
//   console.log('Все текущие заметки: ', notepad.getNotes());

//   notepad.saveNote({
//     id: 'id-3',
//     title: 'Get comfy with Frontend frameworks',
//     body:
//       'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
//     priority: NotepadEditor.Priority.NORMAL,
//   });
  
//   notepad.saveNote({
//     id: 'id-4',
//     title: 'Winter clothes',
//     body:
//       "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
//     priority: NotepadEditor.Priority.LOW,
//   });
  
//   console.log('Все текущие заметки: ', notepad.getNotes());

//   notepad.updateNotePriority('id-4', NotepadEditor.Priority.NORMAL);

// console.log(
//   'Заметки после обновления приоритета для id-4: ',
//   notepad.getNotes(),
// );

// /*
//  * Решил что фреймворки отложу немного, понижаю приоритет
//  */
// notepad.updateNotePriority('id-3', NotepadEditor.Priority.LOW);

// console.log(
//   'Заметки после обновления приоритета для id-3: ',
//   notepad.getNotes(),
// );

// console.log(
//   'Отфильтровали заметки по ключевому слову "HTML": ',
//   notepad.filterNotesByQuery('html'),
// );






///////////////// Модуль - 6 /////////////////////////

////////////////// ДЗ-1, ///////////////////////////////

// let newNotes = {
//   notes: [],
// };

// class Notepad {
  
//   static Priority = {
//     LOW: 0,
//     NORMAL: 1,
//     HIGH: 2,
//   };

//   constructor(notes = []) {
//     this._notes = notes;
//   }

//   get notes() {
//     return this._notes;
//   }

//   findNoteById(id) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const findInNotesId = this.notes[i];
//       if (findInNotesId.id === id) {
//         return findInNotesId;
//       }
//     }
//   }

//   saveNote(note) {
//     this.notes.push(note);
//     return note;
//   }

//   deleteNote(id) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const deleteInNoteId = this.notes[i];
//       if (deleteInNoteId.id === id) {
//         this.notes.splice(i, 1);
//       }
//     }
//   }

//   updateNoteContent(id, updatedContent) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const updateNoteId = this.notes[i];
//       if (updateNoteId.id === id) {
//         this.notes[i] = { ...updateNoteId, ...updatedContent };
//         return updateNoteId;
//       }
//     }
//   }
//   updateNotePriority(id, priority) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const updatePriority = this.notes[i];
//       if (updatePriority.id === id) {
//         updatePriority.priority = priority;
//         return updatePriority;
//       }
//     }
//   }
//   filterNotesByQuery(query) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const filterQuery = this.notes[i];
//       const filterQueryTitleLow = filterQuery.title.toLowerCase();
//       const filterQueryBodyLow = filterQuery.body.toLowerCase();
//       const queryLow = query.toLowerCase();
//       if (
//         filterQueryTitleLow.includes(queryLow) ||
//         filterQueryBodyLow.includes(queryLow)
//       ) {
//         newNotes.notes.push(filterQuery);
//       }
//     }
//     return newNotes;
//   }

//   filterNotesByPriority(priority) {
//     for (let i = 0; i < this.notes.length; i += 1) {
//       const filterPriority = this.notes[i];
//       if (filterPriority.priority === priority) {
//         newNotes.notes.priority = filterPriority.priority;
//         return newNotes;
//       }
//     }
//   }
// }



// const initialNotes = [
//   {
//     id: 'id-1',
//     title: 'JavaScript essentials',
//     body:
//       'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//     priority: Notepad.Priority.HIGH,
//   },
//   {
//     id: 'id-2',
//     title: 'Refresh HTML and CSS',
//     body:
//       'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//     priority: Notepad.Priority.NORMAL,
//   },
// ];

// const notepad = new Notepad(initialNotes);

// console.log('Все текущие заметки: ', notepad.notes);

// notepad.saveNote({
//   id: 'id-3',
//   title: 'Get comfy with Frontend frameworks',
//   body:
//     'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
//   priority: Notepad.Priority.NORMAL,
// });

// notepad.saveNote({
//   id: 'id-4',
//   title: 'Winter clothes',
//   body:
//     "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
//   priority: Notepad.Priority.LOW,
// });

// console.log('Все текущие заметки: ', notepad.notes);

// /*
//  * Зима уже близко, пора поднять приоритет на покупку одежды
//  */
// notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

// console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

// /*
//  * Решил что фреймворки отложу немного, понижаю приоритет
//  */
// notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

// console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

// /*
//  * Решил отфильтровать заметки по слову html
//  */
// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   notepad.filterNotesByQuery('html'),
// );

// /*
//  * Решил отфильтровать заметки по слову javascript
//  */
// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   notepad.filterNotesByQuery('javascript'),
// );

// /*
//  * Хочу посмотреть только заметки с нормальным приоритетом
//  */
// console.log(
//   'Отфильтровали заметки по нормальному приоритету: ',
//   notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
// );

// /*
//  * Обновим контент заметки с id-3
//  */
// notepad.updateNoteContent('id-3', {
//   title: 'Get comfy with React.js or Vue.js',
// });

// console.log(
//   'Заметки после обновления контента заметки с id-3: ',
//   notepad.notes,
// );

// /*
//  * Повторил HTML и CSS, удаляю запись c id-2
//  */
// notepad.deleteNote('id-2');
// console.log('Заметки после удаления с id -2: ', notepad.notes);




/////////////////   МОдуль-7 ////////////////

//////////////////  ДЗ-1 ///////////////////


const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// const getAllNames = users => {
//   return users.map(user => user.name)
// };

// console.log(getAllNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// const getUsersByEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color)
// };

// console.log(getUsersByEyeColor(users, 'blue'));

// Получить массив имен пользователей по полу (поле gender).

// const getUsersByGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).map(user =>user.name)
// };

// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' 

// const getInactiveUsers = users => {
//   return users.filter(user =>!user.isActive)
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getUserByEmail = (users, email) => {
//   return users.find(user =>user.email === email);
// };

// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age>=min && user.age<=max)
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Получить общую сумму баланса (поле balance) всех пользователей.
// const getTotalBalance = users => {
//   return users.reduce((acc,user) => acc + user.balance,0);
//   };

// console.log(getTotalBalance(users));

// Массив имен всех пользователей у которых есть друг с указанным именем.
// const getUsersByFriend = (users, name) => {
//    return users.filter(user => user.friends.includes(name)).map(user => user.name);
// };

// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]