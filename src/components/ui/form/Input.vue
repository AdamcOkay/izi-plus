<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    type: 'text' | 'number' | 'password' | 'email' | 'tel'
    modelValue: string | number;
    hasAction?: boolean;
    placeholder?: string;
    labelId?: string;
    labelText?: string;
    required?: boolean
}

const input = ref<HTMLInputElement>();
const props = withDefaults(defineProps<Props>(), { type: 'text', hasAction: false });
defineEmits(['update:modelValue', 'action-clicked']);
defineExpose({ input });
</script>

<template>
    <div class="input-wrapper">
        <label v-if="props.labelId">{{ props.labelText }}</label>
        <div class="form-input">
            <input
                :id="props.labelId"
                :value="props.modelValue"
                :placeholder="props.placeholder"
                @input="$emit('update:modelValue', $event.target!.value)"
                :type="props.type"
                :required="props.required"
                ref="input"
            />
            <button v-if="props.hasAction" @click="$emit('action-clicked')">
                <slot name="action-icon"></slot>
            </button>
        </div>
    </div>
</template>

<style scoped>
input,
button {
    background: none;
    border: none;
    outline: none;
}

input,
label {
    display: block;
    font-size: 0.875rem;
    line-height: 1rem;
}

input {
    width: 100%;
    font-weight: 600;
}

label {
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-input {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: var(--blue-100);
    border-radius: 1rem;
    overflow: hidden
}
</style>