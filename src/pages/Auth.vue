<script setup lang="ts">
import { computed, ref } from 'vue';
import { Input, Checkbox, MainButton } from '@/components/ui';
import { useStore } from '@/composables';
import { router } from '@/router';

const formData = ref({
    email: "",
    password: "",
    agreed: false
});

const isFormInvalid = computed(() => {
    const { email, password, agreed } = formData.value;
    return !email || !password || !agreed;
});
const passwordShown = ref(false);
const store = useStore();

const authUser = async () => {
    if (formData.value.email !== 'email@example.com' || formData.value.password !== '123') {
        alert('Неверный логин или пароль');
        return;
    }

    const response = await fetch('/data/user.json');
    const userData = await response.json();

    store.commit('setUser', userData);
    router.push('/')
}
</script>

<template>
    <div class="container">
        <form @submit.prevent="authUser">
            <img src="/logo.svg" alt="IZI plus" class="logo">
            <div class="form-body">
                <h1 class="form-title">Вход на платформу</h1>
                <div class="form-items">
                    <div class="form-group">
                        <Input
                            type="email"
                            v-model="formData.email"
                            labelId="email"
                            labelText="E-mail:"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <Input 
                            :type="passwordShown ? 'text' : 'password'"
                            :has-action="true"
                            v-model="formData.password"
                            labelId="password" 
                            labelText="Пароль:"
                            @action-clicked="passwordShown = !passwordShown"
                            required
                        >
                            <template #action-icon v-if="formData.password">
                                <svg v-if="!passwordShown" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="#eye-icon" />
                                </svg>
                                <svg v-if="passwordShown" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="#eye-slash-icon" />
                                </svg>
                            </template>
                        </Input>
                    </div>
                    <Checkbox 
                        v-model="formData.agreed"
                        label-id="agreement"
                        required
                    >
                        <template #label>
                            Даю согласие с <a href="#">условиями оферты</a>, <a href="#">обработкой персональных данных</a>
                            и <a href="#">рекламными рассылками</a>.
                        </template>
                    </Checkbox>
                </div>
                <MainButton type="submit" class="submit-button" :disabled="isFormInvalid">Войти</MainButton>
            </div>
        </form>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    place-items: center;
    min-height: 100vh;
}

form {
    display: block;
    max-width: 22.875rem;
    width: 100%;
    margin: 0 auto;
}

.logo {
    width: 4rem;
    margin: 0 auto 2rem;
}

.form-body {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2rem 1rem;
    background-color: var(--white);
    border-radius: 1rem;
}

.form-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.2;
}

.submit-button {
    width: 100%;
}


@media only screen and (min-width: 950px) {
    .logo {
        width: 5rem;
    }
}
</style>