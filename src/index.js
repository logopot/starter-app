import ReactDOM from "react-dom/client";
import theme from "./themes/commonTheme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <I18nextProvider i18n={i18n}>
            <App />
         </I18nextProvider>
      </ThemeProvider>
   </BrowserRouter>,
);
