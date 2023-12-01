<script setup lang="ts">
import { ref } from 'vue';
import { MainButton } from '@/components/ui';

interface Props {
    title: string;
    body: string;
    btnText: string
}

const props = defineProps<Props>();
const backdrop = ref(null)
const { title, body, btnText } = props;

const emit = defineEmits(['close-modal', 'modal-action']);

const closeModal = (e) => {
    if (!backdrop.value || e.target !== backdrop.value) return;
    emit('close-modal');
}
</script>

<template>
    <Transition name="fade" appear>
        <div class="modal-backdrop" @click="closeModal" ref="backdrop">
            <div class="modal">
                <header class="text-h1">
                    {{ title }}
                </header>

                <section>
                    {{ body }}
                </section>

                <footer>
                    <MainButton type="button" @click="$emit('modal-action')" class="modal-button">
                        {{ btnText }}
                    </MainButton>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 15;
}

.modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 1rem;
    background-color: var(--white);
    border-radius: 1rem 1rem 0rem 0rem;
    overflow-x: auto;
    font-size: 1.25rem;
    line-height: normal;
    text-align: center;
}

.modal-button {
    width: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


@media only screen and (min-width: 750px) {
    .modal-backdrop {
        align-items: center;
    }

    .modal {
        padding: 2.5rem;
        max-width: 30rem;
        border-radius: 1rem;
    }
}
</style>