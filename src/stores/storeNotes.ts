import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati velit reprehenderit molestiae, nobis at, voluptatum optio quasi iusto nemo dicta tenetur autem consectetur vero veritatis  aperiam possimus eius perspiciatis.",
        },

        {
          id: "id2",
          content: "This is another content.",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent: string) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },

    deleteNote(idToDelete: string) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id: string, content: string) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },

  getters: {
    getNoteContent: (state) => {
      return (id: string) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
