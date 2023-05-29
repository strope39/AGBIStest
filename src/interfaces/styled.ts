import { FlattenSimpleInterpolation } from "styled-components";

export interface ITheme {
    media: {
        extraLarge: string;
        large: string;
        medium: string;
        small: string;
    };

    order: {
        main: number;
        modal: number;
    };
}

export type StyledVariants<E extends string | number> = {
    [key in E]?: FlattenSimpleInterpolation;
};
