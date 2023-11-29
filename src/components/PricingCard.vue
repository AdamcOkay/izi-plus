<script setup lang="ts">
import { CompanyPricing } from '@/types';
import { BonusButton, Image } from '@/components/ui';

interface Props {
    pricingItem: CompanyPricing
}

const props = defineProps<Props>();
const { title, description, visual, price } = props.pricingItem;
</script>

<template>
    <div class="pricing-card">
        <div class="visual">
            <Image :visual="visual" :alt="title" />
        </div>
        <div class="info">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <BonusButton :bonus-amount="price" />
        </div>
    </div>
</template>

<style scoped></style>