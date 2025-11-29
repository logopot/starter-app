import AppRouter from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { theme } from "./theme";
import { Container } from "react-bootstrap";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container fluid className="p-0 m-0">
        <Nav />
        <AppRouter />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
