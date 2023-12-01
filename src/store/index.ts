import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { Category, CompanyShowcase, User } from '@/types';

type ModalData = {
    shown: boolean;
    title: string;
    body: string;
    btnText: string;
    action: () => void;
};
export interface State {
    currentCategory: string;
    categories: Category[];
    companies: CompanyShowcase[];
    user: null | User;
    modal: ModalData;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        currentCategory: 'All',
        categories: [],
        companies: [],
        user: null,
        modal: {
            shown: false,
            title: '',
            body: '',
            btnText: 'OK',
            action: () => {},
        },
    },
    getters: {
        categorizedCompanies: (state) => (categoryId: string) => {
            if (categoryId === 'All') {
                return state.companies;
            }

            return state.companies.filter((company) => company.category === categoryId);
        },
        isFavourite: (state) => (id: string) => {
            if (state.user === null) return false;

            return state.user.favourites.includes(id);
        },
    },
    mutations: {
        toggleFavourite(state, id: string) {
            if (state.user === null) return;
            const companyIndex = state.user.favourites.indexOf(id);

            if (companyIndex !== -1) {
                state.user.favourites.splice(companyIndex, 1);
                return;
            }

            state.user.favourites.push(id);
        },
        setUser(state, user: User) {
            state.user = user;
        },
        setCompanies(state, companies: CompanyShowcase[]) {
            state.companies = [...companies];
        },
        setModalData(state, data: ModalData) {
            state.modal = { ...state.modal, ...data };
        },
        showModal(state) {
            state.modal.shown = true;
        },
        closeModal(state) {
            state.modal.shown = false;
        },
    },
});
