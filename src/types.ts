export type Visual = {
    main: string;
    double: string;
    desktop?: string;
};

export type Category = {
    id: string;
    label: string;
    visual: Visual;
};

export interface Company {
    id: string;
    title: string;
    description: string;
    visual: Visual;
    category: string;
    discount: number;
    startingPrice: number;
}

export interface User {
    id: string;
    picture: {
        thumb: Visual;
        profile: Visual;
    };
    fullName: string;
    email: string;
    phone: string;
    workplace: string;
    position: string;
    bonusAmount: number;
    purchases: string[];
    favourites: string[];
    acessible: string[];
}
