import { ThemeAction } from "../../actions";
import { ITheme, themes } from "../../modules/CSS/themes";

export const themesReducerDefaultState: ITheme = themes.normal;

export const themesReducer = (
    state: ITheme = themesReducerDefaultState,
    action: ThemeAction,
): ITheme => {
    switch (action.type) {
        case "SET_THEME":
            return action.theme;
        case "RESET_THEME":
            return themes.normal;
        default:
            return state;
    }
};
