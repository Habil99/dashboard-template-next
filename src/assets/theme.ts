import { PaletteMode } from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";

// #2B2E4A -> name: "night blue"
// #E84545 -> name: "red orange"
// #903749 -> name: "solid pink"
// #53354A -> name: "Eggplant"
// #0A2647 -> name: dark eclipse

export const colorTokens = (mode: PaletteMode) => ({
  black: {
    100: "#d5d6db",
    200: "#acadb6",
    300: "#828592",
    400: "#595c6d",
    500: "#25293C",
    600: "#26293a",
    700: "#1c1f2c",
    800: "#13141d",
    900: "#090a0f",
    main: "#2F3349",
    light: "#53354A",
    dark: "#0A2647",
  },
  blue: {
    100: "#ced4da",
    200: "#9da8b5",
    300: "#6c7d91",
    400: "#3b516c",
    500: "#0a2647",
    600: "#081e39",
    700: "#06172b",
    800: "#040f1c",
    900: "#02080e",
  },
  grey: {
    100: "#eeeeef",
    200: "#dcdddf",
    300: "#cbccce",
    400: "#b9bbbe",
    500: "#a8aaae",
    600: "#86888b",
    700: "#656668",
    800: "#434446",
    900: "#222223",
  },
  red: {
    100: "#fadada",
    200: "#f6b5b5",
    300: "#f18f8f",
    400: "#ed6a6a",
    500: "#e84545",
    600: "#ba3737",
    700: "#8b2929",
    800: "#5d1c1c",
    900: "#2e0e0e",
  },
  yellow: {
    100: "#ffecd9",
    200: "#ffd9b4",
    300: "#ffc58e",
    400: "#ffb269",
    500: "#ff9f43",
    600: "#cc7f36",
    700: "#995f28",
    800: "#66401b",
    900: "#33200d",
  },
  accent: {
    100: "#e4e6f4",
    200: "#c9cde9",
    300: "#afb3de",
    400: "#9499d3",
    500: "#7980c8",
    600: "#5f67b9",
    700: "#464daa",
    800: "#2d348b",
    900: "#151a6c",
  },
  indigo: {
    100: "#e3e1fc",
    200: "#c7c2f9",
    300: "#aba4f6",
    400: "#8f85f3",
    500: "#7367f0",
    600: "#5c52c0",
    700: "#453e90",
    800: "#2e2960",
    900: "#171530",
  },
  teal: {
    100: "#ccf5fa",
    200: "#99ecf6",
    300: "#66e2f1",
    400: "#33d9ed",
    500: "#00cfe8",
    600: "#00a6ba",
    700: "#007c8b",
    800: "#00535d",
    900: "#00292e",
  },
  green: {
    100: "#d4f4e2",
    200: "#a9e9c5",
    300: "#7edda9",
    400: "#53d28c",
    500: "#28c76f",
    600: "#209f59",
    700: "#187743",
    800: "#10502c",
    900: "#082816",
  },
});

export const themeConfig = (mode: PaletteMode): ThemeOptions => {
  const colors = colorTokens(mode);

  return {
    palette: {
      mode: "dark",
      background: {
        default: colors.blue[500],
        paper: colors.black.main,
      },
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: {
        main: colors.black[500],
        dark: colors.black[700],
      },
      secondary: {
        main: colors.blue[500],
        dark: colors.blue[700],
      },
      text: {
        primary: "#fff",
        secondary: "#E4E6F4",
      },
      ...colors.grey,
      error: {
        main: colors.red[500],
      },
      warning: {
        main: colors.yellow[500],
      },
      info: {
        main: colors.teal[500],
      },
      success: {
        main: colors.green[500],
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    direction: "ltr",
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained", color: "primary" },
            style: {
              color: "#fff",
              backgroundColor: colors.indigo[500],
              boxShadow:
                "0px 3px 5px 2px rgba(12, 16, 27, 0.15), 0px 5px 3px rgba(12, 16, 27, 0.01), 0px 1px 4px 2px rgba(12, 16, 27, 0.08)",
              "&:hover": {
                backgroundColor: colors.indigo[700],
              },
            },
          },
          {
            props: { variant: "contained", color: "secondary" },
            style: {
              color: "#fff",
              backgroundColor: colors.red[500],
              boxShadow: "0px 1px 20px 1px #EA5455",
              "&:hover": {
                backgroundColor: colors.red[700],
              },
            },
          },
        ],
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          sizeSmall: {
            padding: "12px 16px",
            fontWeight: 500,
            fontSize: "12px",
            letterSpacing: "1.25px",
            lineHeight: "1.2",
            borderRadius: "6px",
            height: "auto",
          },
          sizeMedium: {
            padding: "12px 20px",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "1.25px",
            lineHeight: "16px",
            borderRadius: "6px",
            height: "auto",
          },
          sizeLarge: {
            padding: "12px 22px",
            fontWeight: 500,
            fontSize: "16px",
            letterSpacing: "1.25px",
            lineHeight: "1.5",
            borderRadius: "6px",
            height: "auto",
          },
        },
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  };
};

export const theme = createTheme(themeConfig("dark"));
