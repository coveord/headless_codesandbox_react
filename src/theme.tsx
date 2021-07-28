import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#1372ec",
    },
    secondary: {
      main: "#333357",
    },
    error: {
      main: "#ce3f00",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Avenir, Helvetica, Arial, sans-serif",
    // Material-UI uses rem units for the font size. This will change the base size for the entire search page
    // More info at https://material-ui.com/customization/typography/#font-size
    fontSize: 17,
  },
});

export default theme;
