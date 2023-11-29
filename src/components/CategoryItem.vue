<script setup lang="ts">
import { ref, watch } from 'vue';
import { Visual } from '@/types';
import { Image } from '@/components/ui'

export interface CategoryItemProps {
    category: {
        id: string;
        label: string;
        visual: Visual
    }
    isChecked: boolean;
}

const props = defineProps<CategoryItemProps>();
const { category, isChecked } = props;
const { id, label, visual } = category
const inputChecked = ref(isChecked);

watch(props, () => {
    inputChecked.value = props.isChecked
});

defineEmits(['category-change']);
</script>

<template>
    <label :for="id">
        <input type="checkbox" :id="id" :checked="inputChecked" @change="$emit('category-change', id)">
        <div class="category-item">
            <div class="category-visual">
                <Image :visual="visual" :alt="id" />
            </div>
            <p class="category-label">{{ label }}</p>
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

.category-item {
    display: grid;
    grid-template-columns: 4.5rem;
    align-items: center;
    gap: 0.25rem;
}

.category-visual {
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

.category-label {
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
}

input:checked~.category-item .category-visual {
    background: var(--blue-gradient);
}

input:checked~.category-item .category-label {
    color: var(--blue-400);
}

.category-item:hover .category-label {
    color: var(--blue-400);
}


@media only screen and (min-width: 950px) {
    .category-item {
        grid-template-columns: 3.5rem 1fr;
        gap: 0.75rem;
        width: auto;
    }

    .category-visual {
        flex: 1;
        flex-basis: 100%;
    }

    .category-label {
        text-align: left;
        font-size: 0.875rem;
    }
}
</style>
