import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <Container>
        <Nav />
        <Router />
      </Container>
    </>
  );
};

export default App;
