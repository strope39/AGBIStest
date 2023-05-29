import { ITheme } from "../interfaces/styled";

export const baseTheme: ITheme = {
    media: {
        extraLarge: "(min-width: 1140px)",
        large: "(min-width: 960px)",
        medium: "(min-width: 720px)",
        small: "(min-width: 540px)",
    },

    // z-index
    order: {
        main: 50,
        modal: 100,
    },
};
