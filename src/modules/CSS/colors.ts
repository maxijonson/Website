import { shade } from "./shades";

export type Color = "black" | "blue" | "navy" | "orange" | "white" | "red";

export type IColors = { [name in Color]: string };

export type IShade = { [name in shade]: IColors };

export const colors: IShade = {
    pitchDark: {
        black: "#030303",
        blue: "#04080A",
        navy: "#050607",
        orange: "#0B0602",
        white: "#0A0A0A",
        red: "#090203",
    },
    pitchLight: {
        black: "#F8F8F7",
        blue: "#F8FCFD",
        navy: "#F9FAFB",
        orange: "#FFFBF7",
        white: "#FDFDFD",
        red: "#FCF7F8",
    },
    dark: {
        black: "#11100D",
        blue: "#397EA1",
        navy: "#4B5C71",
        orange: "#BA651C",
        white: "#A5A6A2",
        red: "#8D1E22",
    },
    light: {
        black: "#171611",
        blue: "#7EC3E5",
        navy: "#90A1B6",
        orange: "#FFA961",
        white: "#E9EBE7",
        red: "#D16367",
    },
    normal: {
        black: "#14130F",
        blue: "#4EADDC",
        navy: "#677E9B",
        orange: "#FF8A26",
        white: "#E2E4DE",
        red: "#C1292E",
    },
    ultraDark: {
        black: "#0B0A09",
        blue: "#0F2028",
        navy: "#13171D",
        orange: "#2F1A07",
        white: "#2A2A29",
        red: "#240809",
    },
    ultraLight: {
        black: "#353227",
        blue: "#DEF0F8",
        navy: "#E3E7EC",
        orange: "#FFE9D7",
        white: "#F9FAF9",
        red: "#F3D8D9",
    },
    veryDark: {
        black: "#0E0D0B",
        blue: "#244F64",
        navy: "#2F3A47",
        orange: "#743F12",
        white: "#676865",
        red: "#581315",
    },
    veryLight: {
        black: "#26241C",
        blue: "#AED9EF",
        navy: "#B9C4D1",
        orange: "#FFC99C",
        white: "#F1F2F0",
        red: "#E29DA0",
    },
};

// https://coolors.co/677e9b-4eaddc-e2e4de-ff8a26-39332d
