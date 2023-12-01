<script setup lang="ts">
import { computed } from 'vue';
import { CompanyPricing } from '@/types';
import { MainButton, Image } from '@/components/ui';

interface Props {
    pricingItem: CompanyPricing
}

const props = defineProps<Props>();
const { title, description, visual, price } = props.pricingItem;
const normalizedPrize = computed(() => price.toLocaleString('en').replace(/,/g, " "));
</script>

<template>
    <div class="pricing-card">
        <div class="visual">
            <Image :visual="visual" :alt="title" />
        </div>
        <div class="info">
            <div class="text-wrapper">
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
            <MainButton class="price-button">{{ normalizedPrize }} Б</MainButton>
        </div>
    </div>
</template>

<style scoped>
.pricing-card,
.info,
.text-wrapper {
    display: flex;
    flex-direction: column;

}

.pricing-card,
.text-wrapper {
    gap: 0.5rem;
}

.pricing-card {
    padding: 0.5rem 1rem 1rem;
    background-color: var(--white);
    border-radius: 1rem;
}

.visual {
    max-width: 16.5rem;
}

.info {
    gap: 1rem;
}

h2 {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1rem;
}

p {
    opacity: 0.8;
    font-size: 0.625rem;
}

.price-button {
    width: 100%;
}


@media only screen and (min-width: 750px) {

    .pricing-card,
    .text-wrapper {
        gap: 1rem;
    }

    .info {
        justify-content: flex-start;
        gap: 1.5rem;
    }

    .pricing-card {
        align-items: center;
        flex-direction: row;
        padding: 2rem 2.5rem 2rem 1rem;
    }

    h2 {
        font-size: 1.25rem;
        line-height: 1.5;
    }

    p {
        font-size: 0.875rem;
    }
    
    .price-button {
        width: max-content;
    }
}
</style>