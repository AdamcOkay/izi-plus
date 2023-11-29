<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from '@/composables';
import { Company } from '@/types';
import Header from '@/components/Header.vue';
import { FavouriteButton, Image } from '@/components/ui';
import PricingCard from '@/components/PricingCard.vue';

const router = useRoute()
const store = useStore();
const company = ref<Company>();
const isFavourite = ref(store.getters.isFavourite(router.params.id));

const toggleFavourite = () => {
    store.commit('toggleFavourite', router.params.id);
    isFavourite.value = store.getters.isFavourite(router.params.id);
}

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
        <section class="visual">
            <Image :visual="company.visual" alt="title" />
            <FavouriteButton :is-favourite="isFavourite" @click="toggleFavourite" class="favourite-button " />
        </section>
        <div class="container">
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

<style scoped></style>