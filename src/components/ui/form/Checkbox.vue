<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    labelId: string;
    required?: boolean;
    modelValue: boolean;
}
const input = ref<HTMLInputElement>();
const props = defineProps<Props>();
defineEmits(['update:modelValue']);
defineExpose({ input });
</script>

<template>
    <label :for="props.labelId" class="form-checkbox">
        <slot name="label"></slot>
        <input
            type="checkbox"
            :id="props.labelId"
            :checked="modelValue"
            @change="$emit('update:modelValue', $event.target!.checked)"
            :required="props.required"
            ref="input"
        />
        <span class="checkmark">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                <use xlink:href="#checkmark-icon" />
            </svg>
        </span>
    </label>
</template>

<style scoped>
.form-checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    padding-left: 2.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: var(--black);
}

.form-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    --icon-clr: var(--white);

    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    height: 1.25rem;
    width: 1.25rem;
    padding-top: 0.15rem;
    border: 2px solid var(--blue-400);
    border-radius: 0.25rem;
}

.checkmark .icon {
    display: none;
}

.form-checkbox:hover input~.checkmark {
    background-color: var(--blue-100);
}

.form-checkbox input:checked~.checkmark {
    background-color: var(--blue-400);
}

.form-checkbox input:checked~.checkmark .icon {
    display: block;
}
</style>