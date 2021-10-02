import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Titulo from './Components/Titulo'
import Galeria1 from './Components/Galeria1'
import Galeria2 from './Components/Galeria2'
import SubTitulo from './Components/SubTitulo'
import Footer from './Components/Footer'

const Home=()=>{
    return(
        <Container>
        <Row>
          <Col>
            <Titulo />
          </Col>
          <Col>
            <Galeria1 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Galeria2 />
          </Col>
          <Col>
            <SubTitulo />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    )
}

export default Home