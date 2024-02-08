<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
        <tbody>
          <tr>
            <td>Number of Notes</td>
            <td>{{storeNotes.totalNotesCount  }}</td>
          </tr>
          <tr>
            <td>Number of Characters (of all notes)</td>
            <td>{{ storeNotes.totalCharactersCount }}</td>
          </tr>
        </tbody>
      </thead>
    </table>
    <input
    v-model="loveNoteballs"
    class="input"
    type="text"
    placeholder="Do you love Noteballs?"
v-autofocus
    />
  </div>
</template>


<script setup lang="ts">
import {ref} from "vue"
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from '@/use/useWatchCharacters';
const storeNotes =useStoreNotes()
const loveNoteballs =ref('')
useWatchCharacters(loveNoteballs,50);

</script>