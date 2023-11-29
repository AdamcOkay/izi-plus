<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    bonusAmount: number
    isFrom?: boolean
}

const props = defineProps<Props>();
const normalizedValue = computed(() => props.bonusAmount.toLocaleString('en').replace(/,/g, " "));
</script>

<template>
    <button :title="normalizedValue">
        <span v-if="props.isFrom">от</span>
        <span class="bonus-amount">{{ normalizedValue }}</span>
        <span>Б</span>
    </button>
</template>

<style scoped>
button {
    --icon-clr: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    min-width: 3.5rem;
    max-width: 6.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 2rem;
    background: var(--blue-gradient);
    font-weight: 700;
    white-space: nowrap;
    font-size: 0.75rem;
    color: var(--white);
}

.bonus-amount {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

button:hover,
button:focus-visible {
    background: var(--blue-400);
}

button:active {
    background: var(--blue-500);
}
</style>
