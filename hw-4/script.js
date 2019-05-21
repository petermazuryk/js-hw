'use strict';

//=============== Модуль - 4 ===================

// =============  ДЗ - 1 =======================

const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

let newNotes = {
  notes: [],
};
const notepad = {
  notes: [],

  getNotes() {
    return this.notes;
  },

  findNoteById(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const findInNotesId = this.notes[i];
      if (findInNotesId.id === id) {
        return findInNotesId;
      }
    }
  },

  saveNote(note) {
    this.notes.push(note);
    return this.notes;
  },

  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const deleteInNoteId = this.notes[i];
      if (deleteInNoteId.id === id) {
        this.notes.splice(i, 1);
      }
    }
  },

  updateNoteContent(id, updatedContent) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const updateNoteId = this.notes[i];
      if (updateNoteId.id === id) {
        this.notes[i] = { ...updateNoteId, ...updatedContent };
        return updateNoteId;
      }
    }
  },

  updateNotePriority(id, priority) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const updatePriority = this.notes[i];
      if (updatePriority.id === id) {
        updatePriority.priority = priority;
        return updatePriority;
      }
    }
  },
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
  },

  filterNotesByPriority(priority) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const filterPriority = this.notes[i];
      if (filterPriority.priority === priority) {
        newNotes.notes.priority = filterPriority.priority;
        return newNotes;
      }
    }
  },
};

// ======   Проверка задания  =======
notepad.saveNote({
  id: 'id-1',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

notepad.saveNote({
  id: 'id-2',
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Priority.NORMAL,
});
console.log(notepad.notes);
notepad.filterNotesByQuery('html');
console.log(newNotes.notes);

notepad.updateNoteContent('id-1', {
  title: 'Get comfy with React.js or Vue.js',
});
console.log(notepad.notes);

notepad.updateNotePriority('id-2', Priority.LOW);
console.log(notepad.notes);

notepad.filterNotesByPriority(Priority.NORMAL);
console.log(newNotes);

notepad.updateNoteContent('id-1', {
  body: 'Get comfy with React.js or Vue.js',
});
console.log(notepad.notes);
