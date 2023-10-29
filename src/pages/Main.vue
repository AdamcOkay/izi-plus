<script setup lang="ts">
import { computed, ref } from 'vue';
import { Filter } from '@/types';
import Header from '@/components/Header.vue';
import FilterItem from '@/components/FilterItem.vue';
import CompanyCard from '@/components/CompanyCard.vue';
import { useStore } from '@/composables';

const store = useStore()
const filters: Filter[] = [
    {
        id: "sport",
        label: "Спорт",
        visualUrl: "/filters/sport.png"
    },
    {
        id: "health",
        label: "Здоровье",
        visualUrl: "/filters/health.png",
    },
    {
        id: "subscriptions",
        label: "Подписки",
        visualUrl: "/filters/subscriptions.png",
    },
    {
        id: "food",
        label: "Еда",
        visualUrl: "/filters/food.png",
    }
]

const currentFilter = ref('All');
const companies = computed({
    get() {
        return store.getters.filteredCompanies(currentFilter.value);
    },
    set(category) {
        return store.getters.filteredCompanies(category);
    }
});

const onFilterChange = (category: string) => {
    if (currentFilter.value === category) {
        companies.value = 'All';
        currentFilter.value = 'All';
        return
    }

    companies.value = category;
    currentFilter.value = category;
}

</script>

<template>
    <Header />

    <body>
        <div class="container">
            <section class="showcase">
                <div class="showcase-header">
                    <h1>Витрина</h1>
                    <div class="filters-list">
                        <FilterItem v-for="filter in filters" :key="filter.id" :id="filter.id" :label="filter.label"
                            :image-url="filter.visualUrl" :is-checked="filter.id === currentFilter"
                            @filter-change="onFilterChange" />
                    </div>
                </div>

                <div class="showcase-list">
                    <h2 class="empty-showcase" v-if="companies.length === 0">
                        В данной категории нет компаний
                    </h2>
                    <CompanyCard v-if="companies.length > 0" v-for="company in companies" :key="company.id" :company="company" />
                </div>
            </section>
        </div>
    </body>
</template>

<style scoped>
.showcase-header {
    border-radius: 0rem 0rem 1rem 1rem;
    padding-inline: 1rem;
    margin-inline: -1rem;
    padding-bottom: 1.5rem;
    background-color: var(--white);
}

.filters-list {
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

    .filters-list {
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