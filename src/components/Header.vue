<script setup lang="ts">
import { useStore } from '@/composables'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { BonusButton, Image, Input } from '@/components/ui';

const store = useStore();
const user = computed(() => store.state.user)
const isLoggedIn = computed(() => user.value !== null)
const isScrolled = ref(false);
const isMenuShown = ref(false);
const searchQuery = ref('');

const handleScroll = () => {
    const scrollAmount = isScrolled.value ? 100 : 150
    isScrolled.value = window.scrollY >= scrollAmount
};

const toggleMenu = () => {
    isMenuShown.value = !isMenuShown.value;
};

const search = () => {
    console.log(searchQuery);
}

watch(isMenuShown, () => {
    if (isMenuShown.value) {
        document.body.classList.add('no-scroll')
        return
    }
    document.body.classList.remove('no-scroll')
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
    document.body.classList.remove('no-scroll')
    window.removeEventListener('scroll', handleScroll)
});
</script>

<template>
    <header class="page-header" :class="isScrolled && 'page-header--scrolled'">
        <div class="container header-wrapper">
            <div class="header-row">
                <RouterLink to="/" class="logo">
                    <img src="/logo.svg" alt="izi-plus">
                </RouterLink>
                <nav class="menu" :class="isMenuShown && 'shown'">
                    <ul class="menu-list">
                        <li class="menu-list__item menu-list__item--active">
                            <RouterLink to="/" @click="isMenuShown = false">Витрина</RouterLink>
                        </li>
                        <li class="menu-list__item">
                            <RouterLink to="/about" @click="isMenuShown = false">О компании</RouterLink>
                        </li>
                        <li class="menu-list__item">
                            <RouterLink to="/faq" @click="isMenuShown = false">Вопросы и ответы</RouterLink>
                        </li>
                        <li class="menu-list__item">
                            <RouterLink to="/contacts" @click="isMenuShown = false">Контакты</RouterLink>
                        </li>
                    </ul>
                </nav>
                <div class="search">
                    <Input type="text" :has-action="true" v-model="searchQuery" @action-clicked="search"
                        placeholder="Поиск">
                    <template #action-icon>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use xlink:href="#search-icon" />
                        </svg>
                    </template>
                    </Input>
                </div>
                <div class="header-controls">
                    <BonusButton v-if="isLoggedIn" :bonusAmount="user!.bonusAmount" />
                    <RouterLink :to="isLoggedIn ? '/profile' : '/auth'" class="profile-link">
                        <svg v-if="!isLoggedIn" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <use xlink:href="#user-icon" />
                        </svg>
                        <Image v-if="isLoggedIn" :visual="user!.picture.thumb" :alt="user!.fullName" />
                    </RouterLink>
                    <button class="menu-button" @click="toggleMenu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use :xlink:href="isMenuShown ? '#close-icon' : '#hamburger-icon'" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="search-row">
                <Input type="text" :has-action="true" v-model="searchQuery" @action-clicked="search" placeholder="Поиск">
                <template #action-icon>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="#search-icon" />
                    </svg>
                </template>
                </Input>
            </div>
        </div>
    </header>
</template>

<style scoped>
.page-header {
    position: sticky;
    top: 0;
    background-color: var(--white);
    padding-block: 0.75rem;
    z-index: 10;
}

.header-row {
    display: grid;
    grid-template-columns: 1fr min-content;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.logo {
    display: block;
    max-width: 3rem;
}

.menu {
    display: none;
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 2.5rem;
    background-color: var(--white);
}

.menu.shown {
    display: block;
}

.menu-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0;
    margin: 0;
    list-style: none;
}

.menu-list__item a {
    text-decoration: none;
    font-weight: 600;
    color: var(--black)
}

.menu-list__item--active a {
    color: var(--blue-400)
}

.search {
    display: none;
}

.header-controls {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.75rem;
    margin-left: auto;
}

.profile-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
}

.menu-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: var(--blue-shadow-center);
}

.menu-button:hover,
.menu-button:focus-visible {
    --icon-clr: var(--blue-400)
}

.menu-button:active {
    box-shadow: none;
}

.page-header--scrolled .header-row {
    margin: 0;
}

.page-header--scrolled .search {
    display: block;
}

.page-header--scrolled .search-row,
.page-header--scrolled .logo {
    display: none;
}

@media only screen and (min-width: 550px) {
    .header-row {
        grid-template-columns: max-content 1fr min-content;
    }

    .search {
        display: block;
    }

    .search-row {
        display: none;
    }


    .page-header--scrolled .logo {
        display: block;
    }
}

@media only screen and (min-width: 950px) {
    .header-row {
        gap: 1.5rem;
        grid-template-columns: max-content max-content 1fr min-content;
    }

    .menu {
        display: block;
        position: static;
        height: auto;
        width: auto;
        padding: 0;
    }

    .menu-list {
        flex-direction: row;
        gap: 1.5rem
    }

    .menu-button {
        display: none;
    }
}

@media only screen and (min-width: 1200px) {
    .page-header {
        background-color: transparent;
        padding: 0;
    }

    .header-row {
        padding: 1rem 2rem;
        margin-bottom: 1.5rem;
        background-color: var(--white);
        gap: 2.5rem;
        border-radius: 0 0 1rem 1rem;
    }

    .menu-list {
        padding: 0 1rem;
    }
}
</style>
