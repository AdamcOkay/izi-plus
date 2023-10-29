import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

type PricingId = string;
export type CompanyId = string;
type PictureUrl = string;
type CompanyCategory = string;
type UserId = string;
type UserEmail = string;
type UserPhone = string;
type WorkplaceName = string;
type WorkPosition = string;
type DiscountPercent = number;

type CompanyPricing = {
    id: PricingId;
    visual: PictureUrl;
    title: string;
    description: string;
    price: number;
};

type CompanyInfo = {
    visual: PictureUrl;
    title: string;
    description: string[];
    pricing: CompanyPricing[];
};

export interface Company {
    id: CompanyId;
    name: string;
    showcaseTitle: string;
    showcaseDescription: string;
    showcaseVisual: PictureUrl;
    category: CompanyCategory;
    discount: DiscountPercent;
    info: CompanyInfo;
}

export interface User {
    id: UserId;
    profilePictureUrl: PictureUrl;
    fullName: string;
    email: UserEmail;
    phone: UserPhone;
    workplace: WorkplaceName;
    position: WorkPosition;
    bonusAmount: number;
    purchases: CompanyId[];
    favourites: CompanyId[];
    acessible: CompanyId[];
}

export interface State {
    companies: Company[];
    user: null | User;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        companies: [
            {
                id: 'skillbox',
                name: 'Skillbox',
                showcaseTitle: 'Обучение в Skillbox',
                showcaseDescription: 'Получай знание в самой крутой школе чего бы там ни было...',
                showcaseVisual: '/products/skillbox.png',
                category: 'subscriptions',
                discount: 20,
                info: {
                    visual: '/products/skillbox.png',
                    title: 'Обучение в Skillbox',
                    description: [
                        'Устройте кинотеатр у себя дома! Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время.',
                    ],
                    pricing: [
                        {
                            id: 'cheap',
                            visual: '/products/skillbox.png',
                            title: 'Skillbox cheap',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 1500,
                        },
                        {
                            id: 'mid',
                            visual: '/products/skillbox.png',
                            title: 'Skillbox mid',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 1900,
                        },
                        {
                            id: 'expensive',
                            visual: '/products/skillbox.png',
                            title: 'Skillbox expensive',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 1200,
                        },
                    ],
                },
            },
            {
                id: 'ivi',
                name: 'ivi',
                showcaseTitle: 'Подписка на ivi',
                showcaseDescription: 'Получай знание в самой крутой школе чего бы там ни было...',
                showcaseVisual: '/products/ivi.png',
                category: 'subscriptions',
                discount: 0,
                info: {
                    visual: '/products/ivi.png',
                    title: 'Подписка на ivi',
                    description: ['Получай знание в самой крутой школе чего бы там ни было...'],
                    pricing: [
                        {
                            id: 'cheap',
                            visual: '/products/ivi.png',
                            title: 'ivi cheap',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 250,
                        },
                        {
                            id: 'mid',
                            visual: '/products/ivi.png',
                            title: 'ivi mid',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 900,
                        },
                        {
                            id: 'expensive',
                            visual: '/products/ivi.png',
                            title: 'ivi expensive',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 1200,
                        },
                    ],
                },
            },
            {
                id: 'wink',
                name: 'wink',
                showcaseTitle: 'Подписка на wink',
                showcaseDescription: 'Получай знание в самой крутой школе чего бы там ни было...',
                showcaseVisual: '/products/wink.png',
                category: 'subscriptions',
                discount: 0,
                info: {
                    visual: '/products/wink.png',
                    title: 'Подписка на wink',
                    description: ['Получай знание в самой крутой школе чего бы там ни было...'],
                    pricing: [
                        {
                            id: 'cheap',
                            visual: '/products/wink.png',
                            title: 'wink cheap',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 250,
                        },
                        {
                            id: 'mid',
                            visual: '/products/wink.png',
                            title: 'wink mid',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 900,
                        },
                        {
                            id: 'expensive',
                            visual: '/products/wink.png',
                            title: 'wink expensive',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 1200,
                        },
                    ],
                },
            },
            {
                id: 'sber',
                name: 'sber',
                showcaseTitle: 'Подписка на sber',
                showcaseDescription: 'Получай знание в самой крутой школе чего бы там ни было...',
                showcaseVisual: '/products/sber.png',
                category: 'health',
                discount: 0,
                info: {
                    visual: '/products/sber.png',
                    title: 'Подписка на sber',
                    description: ['Получай знание в самой крутой школе чего бы там ни было...'],
                    pricing: [
                        {
                            id: 'cheap',
                            visual: '/products/sber.png',
                            title: 'sber cheap',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 250,
                        },
                        {
                            id: 'mid',
                            visual: '/products/sber.png',
                            title: 'sber mid',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 500,
                        },
                        {
                            id: 'expensive',
                            visual: '/products/sber.png',
                            title: 'sber expensive',
                            description:
                                'Создай персональное пространство для каждого и подключай до пяти устройств. И всё это в одной подписке.',
                            price: 900,
                        },
                    ],
                },
            },
        ],
        user: null,
    },
    getters: {
        filteredCompanies: (state) => (categoryId: string) => {
            if (categoryId === 'All') {
                return state.companies;
            }

            return state.companies.filter((company) => company.category === categoryId);
        },
        startPrice: (state) => (id: string) => {
            const company = state.companies.find((company) => company.id === id);
            if (company === undefined) return null;

            const prices = company.info.pricing.map((item) => item.price);

            return Math.min(...prices);
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
        }
    },
});
