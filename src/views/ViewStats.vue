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
  </div>
</template>


<script setup lang="ts">
import { useStoreNotes } from '@/stores/storeNotes';
const storeNotes =useStoreNotes()
</script>