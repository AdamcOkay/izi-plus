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
    startingPrice: number
}
