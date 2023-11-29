<script setup lang="ts">
interface Props {
    isFavourite: boolean
}

const props = withDefaults(defineProps<Props>(), { isFavourite: false });
</script>

<template>
    <button :class="props.isFavourite && 'is-favourite'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlink:href="#heart-icon" />
        </svg>
    </button>
</template>

<style scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--white);
    border: none;
    border-radius: 50%;
    outline: none;
    transition: 0.1s background-color linear;
}

button.is-favourite {
    --icon-clr: var(--white);

    background-color: var(--pink);
}
</style>