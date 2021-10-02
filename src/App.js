import Menu from "./Components/Menu";
import Galeria from "./Components/Galeria1";
import Galeria2 from "./Components/Galeria2";
import { Container, Row, Col } from "react-bootstrap";
import Titulo from "./Components/Titulo";
import SubTitulo from "./Components/SubTitulo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Politica from "./Politica";
import { Router } from "@material-ui/icons";
{
  /* <img src={galeria1['ex_23-064679.jpg'].default} alt="asd" /> */
}

// Object.entries(galeria1).map((t,k)=>{
//   Object.entries(t[1]).map((t,k)=>{
//     console.log(t[1])
//   })
// })

const App = () => {
  return (
    <>
        <Header />
        <Container fluid>
          <Menu />
        </Container>
      
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/faq"></Route>
        <Route path="/politica">
          <Politica />
        </Route>
      </Switch>
    </>
  );
};

export default App;
