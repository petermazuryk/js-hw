'use strict';

///////////////// Модуль - 6 /////////////////////////

////////////////// ДЗ-1, ///////////////////////////////

let newNotes = {
  notes: [],
};

class Notepad {
  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };

  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const findInNotesId = this.notes[i];
      if (findInNotesId.id === id) {
        return findInNotesId;
      }
    }
  }

  saveNote(note) {
    this.notes.push(note);
    return note;
  }

  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const deleteInNoteId = this.notes[i];
      if (deleteInNoteId.id === id) {
        this.notes.splice(i, 1);
      }
    }
  }

  updateNoteContent(id, updatedContent) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const updateNoteId = this.notes[i];
      if (updateNoteId.id === id) {
        this.notes[i] = { ...updateNoteId, ...updatedContent };
        return updateNoteId;
      }
    }
  }
  updateNotePriority(id, priority) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const updatePriority = this.notes[i];
      if (updatePriority.id === id) {
        updatePriority.priority = priority;
        return updatePriority;
      }
    }
  }
  filterNotesByQuery(query) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const filterQuery = this.notes[i];
      const filterQueryTitleLow = filterQuery.title.toLowerCase();
      const filterQueryBodyLow = filterQuery.body.toLowerCase();
      const queryLow = query.toLowerCase();
      if (
        filterQueryTitleLow.includes(queryLow) ||
        filterQueryBodyLow.includes(queryLow)
      ) {
        newNotes.notes.push(filterQuery);
      }
    }
    return newNotes;
  }

  filterNotesByPriority(priority) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const filterPriority = this.notes[i];
      if (filterPriority.priority === priority) {
        newNotes.notes.priority = filterPriority.priority;
        return newNotes;
      }
    }
  }
}

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.Priority.NORMAL,
  },
];

const notepad = new Notepad(initialNotes);

console.log('Все текущие заметки: ', notepad.notes);

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.notes);

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.notes,
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.notes);
