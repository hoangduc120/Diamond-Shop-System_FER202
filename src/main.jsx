import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AboutUs from "./components/AboutUs.jsx";
import Measure from "./components/Measure.jsx";
import PaymentSuccess from "../src/components/Payment/PaymentSuccess.jsx";
import PaymentFailed from "../src/components/Payment/PaymentFailed.jsx";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Promotion from "./components/Promotion.jsx";
import Contact from "./components/Contact/Contact.jsx";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Contact />
      <AboutUs />
      <PaymentSuccess />
      <PaymentFailed />
      <Promotion />
      <Measure />
    </ThemeProvider>
  </React.StrictMode>
);
