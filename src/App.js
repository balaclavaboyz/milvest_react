import Menu from "./Components/Menu";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Politica from "./Politica";
import Faq from "./Components/Faq";
import "./assets/my.css"
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
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/politica" component={Politica} />
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
