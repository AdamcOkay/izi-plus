<script setup lang="ts">
import { computed, ref } from 'vue';
import { Company } from '@/store';
import { router } from '@/router';
import { BonusButton } from '@/components/ui';
import { useStore } from '@/composables';

interface Props {
    company: Company
}

const props = defineProps<Props>();
const { id, name, showcaseVisual, showcaseTitle, showcaseDescription, discount } = props.company;
const store = useStore();
const isFavourite = ref(store.getters.isFavourite(id));
const priceStarts = computed<number>(() => store.getters.startPrice(id));

const toggleFavourite = () => {
    store.commit('toggleFavourite', id);
    isFavourite.value = store.getters.isFavourite(id);
}

const goToCompanyPage = () => {
    router.push({ path: `/company/${id}` });
}
</script>

<template>
    <div class="company-card">
        <RouterLink :to="`/company/${id}`" class="visual">
            <img :src="showcaseVisual" :alt="name" />
            <span class="discount" v-if="discount > 0">-{{ discount }}%</span>
        </RouterLink>
        <div class="info">
            <RouterLink :to="`/company/${id}`" class="text">
                <h2>{{ showcaseTitle }}</h2>
                <p>{{ showcaseDescription }}</p>
            </RouterLink>
            <div class="controls">
                <button class="favourite-button" :class="isFavourite && 'is-favourite'" @click="toggleFavourite">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="#heart-icon" />
                    </svg>
                </button>
                <BonusButton :is-from="true" :bonus-amount="priceStarts" @click="goToCompanyPage" class="price" />
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    display: block;
    text-decoration: none;
    color: var(--black)
}

.company-card {
    position: relative;
    background-color: var(--white);
    border-radius: 1rem;
    overflow: hidden;
}

.visual {
    position: relative;
}

img {
    width: 100%;
    height: 100%;
}

.discount {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem 0.75rem;
    background-color: var(--white);
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1rem;
}

.info {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 0.75rem;
}

.text {
    padding: 1rem 0 1rem 1.25rem;
    flex-grow: 1;
}

.controls {
    padding: 1rem 1rem 1rem 0;
}

h2 {
    margin-bottom: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
}

p {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
    color: var(--grey)
}

.favourite-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--white);
    border: none;
    border-radius: 50%;
    outline: none;
    transition: 0.1s background-color linear;
}

.favourite-button.is-favourite {
    --icon-clr: var(--white);

    background-color: var(--pink);
}

.price {
    height: 100%;
    padding: 0.5rem 1rem;
}


@media only screen and (min-width: 950px) {
    .company-card {
        display: flex;
        height: 15rem;
    }

    .visual {
        flex-basis: 59%;
    }

    .discount {
        top: 1rem;
        right: 1rem;
        bottom: unset;
    }

    .info {
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        padding: 2.5rem 2rem;
    }

    .text {
        padding: 0;
    }

    h2 {
        margin-bottom: 0.75rem;
        font-size: 1.5rem;
        line-height: 1.875rem;
    }

    p {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    .controls {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 0.75rem;
        padding: 0;
    }

    .favourite-button {
        position: static;
    }

    .price {
        padding: 0.75rem 1.5rem;
        max-width: unset;
        font-size: 1rem;
    }

}
</style>