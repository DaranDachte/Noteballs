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
        <!-- 1 способ
           <RouterLink to="/" class="button is-link is-light">Cancel</RouterLink> -->

        <!-- 2 способ  и 3 внизу
          @click="$router.back()" -->
        <button @click="$router.push('/')" class="button is-link is-light">
          Cancel
        </button>
        <button
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
import AddEditNote from "../components/Notes/AddEditNote.vue";

const noteContent = ref("");
</script>
