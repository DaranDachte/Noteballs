<template>
  <div class="p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
          :value="modelValue"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLTextAreaElement)?.value
            )
          "
          v-autofocus
          maxlength="100"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vAutofocus } from "../../directives/vAutofocus";
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type here please...",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const focusTextarea = () => {
  textareaRef.value && textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});

export type AddEditNoteApi = {
  focusTextarea: () => void;
};
</script>
