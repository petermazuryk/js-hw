'use strict';

/////// Модуль - 5 /////////////

//////////// ДЗ - 1 /////////////

let newNotes = {
  notes: [],
};

const NotepadEditor = function NotepadEditor(notes = []) {
  this.notes = notes;
};

NotepadEditor.Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

NotepadEditor.prototype.getNotes = function() {
  return this.notes;
};

NotepadEditor.prototype.findNoteById = function(id) {
  for (let i = 0; i < this.notes.length; i += 1) {
    const findInNotesId = this.notes[i];
    if (findInNotesId.id === id) {
      return findInNotesId;
    }
  }
};

NotepadEditor.prototype.saveNote = function(note) {
  this.notes.push(note);
  return note;
};

NotepadEditor.prototype.deleteNote = function(id) {
  for (let i = 0; i < this.notes.length; i += 1) {
    const deleteInNoteId = this.notes[i];
    if (deleteInNoteId.id === id) {
      this.notes.splice(i, 1);
    }
  }
};

NotepadEditor.prototype.updateNoteContent = function(id, updatedContent) {
  for (let i = 0; i < this.notes.length; i += 1) {
    const updateNoteId = this.notes[i];
    if (updateNoteId.id === id) {
      this.notes[i] = { ...updateNoteId, ...updatedContent };
      return updateNoteId;
    }
  }
};

NotepadEditor.prototype.updateNotePriority = function(id, priority) {
  for (let i = 0; i < this.notes.length; i += 1) {
    const updatePriority = this.notes[i];
    if (updatePriority.id === id) {
      updatePriority.priority = priority;
      return updatePriority;
    }
  }
};

NotepadEditor.prototype.filterNotesByQuery = function(query) {
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
};

NotepadEditor.prototype.filterNotesByPriority = function(priority) {
  for (let i = 0; i < this.notes.length; i += 1) {
    const filterPriority = this.notes[i];
    if (filterPriority.priority === priority) {
      newNotes.notes.priority = filterPriority.priority;
      return newNotes;
    }
  }
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: NotepadEditor.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: NotepadEditor.Priority.NORMAL,
  },
];

const notepad = new NotepadEditor(initialNotes);

/*
 * Смотрю что у меня в заметках после инициализации
 */
console.log('Все текущие заметки: ', notepad.getNotes());

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: NotepadEditor.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: NotepadEditor.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

notepad.updateNotePriority('id-4', NotepadEditor.Priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-4: ',
  notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', NotepadEditor.Priority.LOW);

console.log(
  'Заметки после обновления приоритета для id-3: ',
  notepad.getNotes(),
);

console.log(
  'Отфильтровали заметки по ключевому слову "HTML": ',
  notepad.filterNotesByQuery('html'),
);
