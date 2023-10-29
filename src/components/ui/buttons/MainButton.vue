<script setup lang="ts">
interface Props {
    theme: 'blue' | 'white'
}

const props = withDefaults(defineProps<Props>(), { theme: 'blue' });
</script>

<template>
    <button :class="props.theme">
        <slot></slot>
    </button>
</template>

<style scoped>
button {

    padding: 1rem;
    border-radius: 2.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1rem;
}

button.blue {
    --icon-clr: var(--white);

    background: var(--blue-gradient);
    box-shadow: var(--blue-shadow-bottom);
    color: var(--white);
}

button.blue:hover,
button.blue:focus-visible {
    background: var(--blue-400);
}

button.white {
    --icon-clr: var(--blue-400);
    
    background: var(--white);
    box-shadow: var(--blue-shadow-center);
    color: var(--blue-400);
}

button.white:hover,
button.white:focus-visible {
    background: var(--blue-100);
}

button:active {
    box-shadow: none;
}
</style>
