<script setup lang="ts">
import { ref, watch } from 'vue';

export interface FilterItemProps {
    id: string;
    imageUrl: string;
    isChecked: boolean;
    label: string;
}

const props = defineProps<FilterItemProps>();
const { id, imageUrl, isChecked, label } = props;
const inputChecked = ref(isChecked);

watch(props, () => {
    inputChecked.value = props.isChecked
})
</script>

<template>
    <label :for="id">
        <input type="checkbox" :id="id" :checked="inputChecked" @change="$emit('filter-change', id)">
        <div class="filter-item">
            <div class="filter-visual">
                <img :src="imageUrl" :alt="id" />
            </div>
            <p class="filter-label">{{ label }}</p>
        </div>
    </label>
</template>

<style scoped>
label {
    cursor: pointer;
}

input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.filter-item {
    display: grid;
    grid-template-columns: 4.5rem;
    align-items: center;
    gap: 0.25rem;
}

.filter-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    margin-inline: auto;
    border-radius: 50%;
    background: var(--blue-100);
}

img {
    max-width: 2.5rem;
}

.filter-label {
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
}

input:checked~.filter-item .filter-visual {
    background: var(--blue-gradient);
}

input:checked~.filter-item .filter-label {
    color: var(--blue-400);
}

.filter-item:hover .filter-label {
    color: var(--blue-400);
}


@media only screen and (min-width: 950px) {
    .filter-item {
        grid-template-columns: 3.5rem 1fr;
        gap: 0.75rem;
        width: auto;
    }

    .filter-visual {
        flex: 1;
        flex-basis: 100%;
    }

    .filter-label {
        text-align: left;
        font-size: 0.875rem;
    }
}
</style>
