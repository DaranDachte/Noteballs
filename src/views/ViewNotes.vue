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

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup lang="ts">
import Note from "../components/Notes/Note.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";
import { ref, type Ref } from "vue";
import { useWatchCharacters } from "@/use/useWatchCharacters";
import { type AddEditNoteApi } from "@/components/Notes/AddEditNote.vue";
const storeNotes = useStoreNotes();

const newNote = ref<string>("");
const addEditNoteRef: Ref<AddEditNoteApi | null> = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value as string);

  newNote.value = "";
  addEditNoteRef.value && addEditNoteRef.value.focusTextarea();
};
useWatchCharacters(newNote);
</script>
