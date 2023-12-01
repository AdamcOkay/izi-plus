<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { Company } from '@/types';
import Header from '@/components/Header.vue';
import { FavouriteButton, Image } from '@/components/ui';
import PricingCard from '@/components/PricingCard.vue';

const router = useRoute()
const company = ref<Company>();

onMounted(async () => {
    const response = await fetch(`/data/${router.params.id}.json`);
    const data = await response.json();

    company.value = data;
})

</script>

<template>
    <Header />

    <main v-if="!company">
        <h1>Загрузка...</h1>
    </main>

    <main v-if="company">
        <section class="visual" :style="`background-color: ${company.visualBgColor}`">
            <Image :visual="company.visual" alt="title" class="company-visual" />
            <FavouriteButton :id="company.id" class="favourite-button" />
        </section>
        <div class="container company-content">
            <section class="info">
                <h1>{{ company.title }}</h1>
                <p v-for="info in company.info">{{ info }}</p>
            </section>
            <section class="pricing">
                <PricingCard v-for="pricing in company.pricing" :key="pricing.id" :pricing-item="pricing" />
            </section>
        </div>
    </main>
</template>

<style scoped>
.visual {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0 1rem;
}

.company-visual {
    display: flex;
    align-items: center;
    max-width: 25rem;
    min-height: 15rem;
    width: 100%;
    height: 100%;
}

.favourite-button {
    position: absolute;
    right: 1rem;
    bottom: 2rem;
}

.company-content {
    position: relative;
    padding-top: 1rem;
    margin-top: -1rem;
    max-width: 795px;
    border-radius: 1rem 1rem 0 0;
    background-color: var(--blue-50);
    z-index: 2;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.875rem;
}

.pricing {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0 3rem;
}

@media only screen and (min-width: 795px) {
    .visual {
        width: 80%;
        border-radius: 1rem;
        padding: 0;
    }

    .favourite-button {
        bottom: 1rem;
    }

    .company-content {
        padding-top: 2rem;
        margin-top: 0;
        border-radius: 0;
        background-color: transparent;
    }

    .info {
        gap: 1.5rem;
        font-size: 1rem;
    }

    .pricing {
        padding: 2rem 0 9rem;
    }
}


@media only screen and (min-width: 1200px) {
    .visual {
        width: 100%;
    }

    .company-content {
        padding: 2rem 0 0;
    }
}
</style>