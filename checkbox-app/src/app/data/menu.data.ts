export type MenuItem = {
    id: string;
    label: string;
    value: number;
};

export type MenuSection = {
    id: string;
    title: string;
    items: MenuItem[];
};

export const MENU_DATA: MenuSection[] = [
    {
        id: 'type1',
        title: 'Тип 1',
        items: [
            { id: 't1-1', label: 'Item 1', value: 20 },
            { id: 't1-2', label: 'Item 2', value: 30 },
            { id: 't1-3', label: 'Item 3', value: 40 },
            { id: 't1-4', label: 'Item 4', value: 50 },
        ],
    },
    {
        id: 'type2',
        title: 'Тип 2',
        items: [
            { id: 't2-1', label: 'Oleg', value: 10 },
            { id: 't2-2', label: 'Stanislav', value: 15 },
            { id: 't2-3', label: 'Alex', value: 25 },
        ],
    },
];