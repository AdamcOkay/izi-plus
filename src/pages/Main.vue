<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { Category } from '@/types';
import Header from '@/components/Header.vue';
import CategoryItem from '@/components/CategoryItem.vue';
import CompanyCard from '@/components/CompanyCard.vue';
import { useStore, useFetch } from '@/composables';

const store = useStore();
const { data: categories } = useFetch<Category[]>('/data/categories.json');

const currentCategory = ref('All');
const companies = computed({
    get() {
        return store.getters.categorizedCompanies(currentCategory.value);
    },
    set(category) {
        return store.getters.categorizedCompanies(category);
    }
});

const onCategoryChange = (category: string) => {
    if (currentCategory.value === category) {
        companies.value = 'All';
        currentCategory.value = 'All';
        return
    }

    companies.value = category;
    currentCategory.value = category;
}

onMounted(async () => {
    const response = await fetch('/data/showcase.json');
    const showcaseCompanies = await response.json();
    store.commit('setCompanies', showcaseCompanies);
});

</script>

<template>
    <Header />

    <main>
        <div class="container">
            <section class="showcase">
                <div class="showcase-header">
                    <h1>Витрина</h1>
                    <div class="categories">
                        <CategoryItem
                            v-for="category in categories"
                            :key="category.id"
                            :category="category"
                            :is-checked="category.id === currentCategory"
                            @category-change="onCategoryChange"
                        />
                    </div>
                </div>

                <div class="showcase-list">
                    <h2 class="empty-showcase" v-if="companies.length === 0">
                        В данной категории нет компаний
                    </h2>
                    <CompanyCard
                        v-if="companies.length > 0"
                        v-for="company in companies"
                        :key="company.id"
                        :company="company"
                    />
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
.showcase-header {
    border-radius: 0rem 0rem 1rem 1rem;
    padding-inline: 1rem;
    margin-inline: -1rem;
    padding-bottom: 1.5rem;
    background-color: var(--white);
}

.categories {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-inline: 1rem;
    margin-top: 1rem;
    margin-inline: -1rem;
}

.empty-showcase {
    font-size: 1.25rem;
    text-align: center;
}

.showcase-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block: 1rem 5rem;
}

@media only screen and (min-width: 950px) {
    .showcase {
        display: flex;
        align-items: start;
        gap: 2rem;
        padding-top: 2rem;
    }

    .showcase-header {
        position: sticky;
        top: 6rem;
        margin: 0;
        background-color: transparent;
        flex-basis: 15rem;
    }

    .categories {
        padding: 1rem;
        margin-top: 2rem;
        border-radius: 1rem;
        background-color: var(--white);
        flex-direction: column;
    }

    .showcase-list {
        padding-top: 4.5rem;
        flex-basis: calc(100% - 15rem);
        gap: 1.5rem;
    }
}

@media only screen and (min-width: 1200px) {
    .showcase {
        gap: 4rem;
    }
}
</style>