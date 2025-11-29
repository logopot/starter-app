import AppRouter from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { theme } from "./theme";
import { Container } from "react-bootstrap";
import Nav from "./components/Nav/Nav";

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Container>
            <Nav />
            <AppRouter />
         </Container>
      </ThemeProvider>
   );
};

export default App;
