// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#cda5bc",
      main: "#855ca4",
      dark: "#130d18",
      contrastText: "#f9f7fb",
    },
    secondary: {
      light: "#f9f7fb",
      main: "#cda5bc",
      dark: "#bd8998",
      contrastText: "#130d18",
    },
    background: {
      default: "#f9f7fb",
      paper: "#f9f7fb",
    },
    text: {
      primary: "#130d18",
      secondary: "#bd8998",
    },
  },
});

export default theme;
