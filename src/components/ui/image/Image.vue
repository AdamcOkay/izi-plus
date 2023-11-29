<script setup lang="ts">
import { Visual } from '@/types';

type Props = {
    visual: Visual;
    alt: string;
}

const { visual, alt } = defineProps<Props>();
const { main, double, desktop } = visual
</script>

<template>
    <picture>
        <source v-if="desktop" media="(min-width: 750px)" :srcset="desktop" />
        <img :src="main" :alt="alt" :srcset="`${double} 2x`" />
    </picture>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>