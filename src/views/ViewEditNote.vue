<template>
  <div class="edit-note">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit Note"
      label="Edit Note"
    >
      <template #buttons>
        <button @click="$router.push('/')" class="button is-link is-light mr-2">
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";

const noteContent = ref<string>("");
const storeNotes = useStoreNotes();
const route = useRoute();
const router = useRouter();

noteContent.value = storeNotes.getNoteContent(route.params.id as string);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id as string, noteContent.value);
  router.push("/");
};
</script>
