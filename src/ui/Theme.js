import { createTheme } from "@material-ui/core/styles";

const foxBlue = "#3DB2FF";
const foxCream = "#FFEDDA";
const foxOrange = "#EE9A38";

export default createTheme({
  palette: {
    common: {
      blue: foxBlue,
      cream: foxCream,
      orange: foxOrange,
    },
    primary: {
      main: foxOrange,
    },
    secondary: {
      main: foxBlue,
    },
  },
  typography: {
    h1: {
      fontFamily: "Palanquin",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: foxCream,
    },
    h2: {
      fontFamily: "Palanquin Dark",
      fontWeight: 500,
      fontSize: "2.5rem",
      color: foxBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Palanquin Dark",
      fontWeight: 500,
      fontSize: "2rem",
      color: foxBlue,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "Palanquin Dark",
      fontWeight: 500,
      fontSize: "1.5em",
      color: foxOrange,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: "Palanquin",
      fontWeight: 400,
      fontSize: "1.2em",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: "Palanquin",
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "Palanquin",
      fontWeight: 400,
      fontSize: "1.3rem",
      lineHeight: 1.5,
    },
    tab: {
      fontFamily: "Palanquin",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1.1rem",
    },
    join: {
      fontFamily: "caveat brush",
      fontSize: "1.2em",
      textTransform: "none",
      color: foxCream,
      lineHeight: 1.5,
    },
    learnButton: {
      fontFamily: "Palanquin",
      borderColor: foxOrange,
      borderWidth: 2,
      color: foxOrange,
      textTransform: "none",
      fontWeight: "bold",
      borderRadius: 50,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: foxBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: foxBlue,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${foxBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${foxBlue}`,
        },
      },
    },
    MuiInputBase: {
      input: {
        color: "#616161",
        fontSize: "1rem",
      },
    },
  },
});
