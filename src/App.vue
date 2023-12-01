<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/composables';
import { Modal } from '@/components/ui';

const store = useStore();
const modal = computed(() => store.state.modal);

const closeModal = () => {
    store.commit('setModalData', { action: () => { } })
    store.commit('closeModal')
};

const emitModalAction = () => {
    modal.value.action();
    store.commit('setModalData', { action: () => { } });
    store.commit('closeModal')
}


</script>

<template>
    <RouterView />
    <Modal v-if="modal.shown" :title="modal.title" :body="modal.body" :btn-text="modal.btnText" @modal-action="emitModalAction"
        @close-modal="closeModal" />
</template>

<style scoped></style>
