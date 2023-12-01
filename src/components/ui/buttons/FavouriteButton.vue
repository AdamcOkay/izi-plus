<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/composables';
import { router } from '@/router';

interface Props {
    id: string;
}

const props = defineProps<Props>();
const { id } = props
const store = useStore();
const isFavourite = ref(store.getters.isFavourite(id));


const toggleFavourite = () => {
    if (store.state.user === null) {
        store.commit('setModalData', {
            shown: true,
            title: 'Нужно авторизоваться',
            body: 'Для добавления компании в избранное нужно авторизоваться',
            btnText: 'Авторизоваться',
            action: () => { router.push('/auth') }
        })
        return;
    }

    store.commit('toggleFavourite', id);
    isFavourite.value = store.getters.isFavourite(id);
}
</script>

<template>
    <button :class="isFavourite && 'is-favourite'" @click="toggleFavourite">
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
    padding: 0;
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