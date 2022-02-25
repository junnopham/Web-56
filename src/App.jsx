import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./App.css";

import BurgerBuilder from "./components/BurgerBuilder";
import BurgerOrder from "./components/BurgerOrder";

function App() {
  const [salad, setSalad] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [bacon, setBacon] = useState(0);

  const onBurgerChange = (salad, cheese, meat, bacon) => {
    setSalad(salad);
    setCheese(cheese);
    setMeat(meat);
    setBacon(bacon);
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col lg="6">
          <BurgerBuilder
            salad={salad}
            cheese={cheese}
            meat={meat}
            bacon={bacon}
          />
        </Col>
        <Col lg="6">
          <BurgerOrder onBurgerChange={onBurgerChange} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
