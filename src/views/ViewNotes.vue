<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a New Note"
    >
      <template #buttons>
        <button
          @click.prevent="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <!-- <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new Note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click.prevent="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div> -->

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup lang="ts">
import Note from "../components/Notes/Note.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";
import { ref } from "vue";

const storeNotes = useStoreNotes();

const newNote = ref("");
const addEditNoteRef = ref(null);

//const newNoteRef = ref(null);

// const notes = ref([
//   {
//     id: "id1",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati velit reprehenderit molestiae, nobis at, voluptatum optio quasi iusto nemo dicta tenetur autem consectetur vero veritatis  aperiam possimus eius perspiciatis.",
//   },

//   {
//     id: "id2",
//     content: "This is another content.",
//   },
// ]);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  //   let currentDate = new Date().getTime(),
  //     id = currentDate.toString();

  //   let note = {
  //     id,
  //     content: newNote.value,
  //   };
  //   notes.value.unshift(note);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
  //newNoteRef.value.focus();
  // };
  // const deleteNote = (idToDelete: string) => {
  //   notes.value = notes.value.filter((note) => {
  //     return note.id !== idToDelete;
  //   });
};
</script>
