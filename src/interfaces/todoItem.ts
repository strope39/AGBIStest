export interface ITodoItem {
    id: number;
    name: string;
    description: string;
    isDone: boolean;
}

export const enum langEnum {
    ru = "ru",
    en = "en",
}
