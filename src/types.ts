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

export interface CompanyShowcase {
    id: string;
    title: string;
    description: string;
    visual: Visual;
    category: string;
    discount: number;
    startingPrice: number;
}

export interface CompanyPricing {
    id: string;
    visual: Visual;
    title: string;
    description: string;
    price: number;
}

export interface Company {
    id: string;
    title: string;
    info: string;
    visual:Visual;
    pricing: CompanyPricing[];
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
