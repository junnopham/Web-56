import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const toppings = [
  {
    name: "salad",
    price: 10,
  },
  {
    name: "cheese",
    price: 20,
  },
  {
    name: "meat",
    price: 25,
  },
  {
    name: "bacon",
    price: 28,
  },
];

const BurgerOrder = ({ onBurgerChange }) => {
  const [total, setTotal] = useState(0);
  const [salad, setSalad] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [bacon, setBacon] = useState(0);

  const getTopping = (name) => {
    switch (name) {
      case "salad":
        return salad;
      case "cheese":
        return cheese;
      case "meat":
        return meat;
      case "bacon":
        return bacon;
      default:
        return 0;
    }
  };

  const decrementTopping = (name) => {
    switch (name) {
      case "salad":
        setSalad(salad - 1);
        break;
      case "cheese":
        setCheese(cheese - 1);
        break;
      case "meat":
        setMeat(meat - 1);
        break;
      case "bacon":
        setBacon(bacon - 1);
        break;
      default:
        break;
    }
  };

  const incrementTopping = (name) => {
    switch (name) {
      case "salad":
        setSalad(salad + 1);
        break;
      case "cheese":
        setCheese(cheese + 1);
        break;
      case "meat":
        setMeat(meat + 1);
        break;
      case "bacon":
        setBacon(bacon + 1);
        break;
      default:
        break;
    }
  };

  const getPrice = (name) => {
    return toppings.find((item) => item.name === name).price;
  };

  useLayoutEffect(() => {
    const total =
      salad * getPrice("salad") +
      cheese * getPrice("cheese") +
      meat * getPrice("meat") +
      bacon * getPrice("bacon");

    setTotal(total);
  }, [salad, cheese, meat, bacon]);

  useLayoutEffect(() => {
    if (salad < 0) setSalad(0);
    if (cheese < 0) setCheese(0);
    if (meat < 0) setMeat(0);
    if (bacon < 0) setBacon(0);
  }, [salad, cheese, meat, bacon]);

  useEffect(() => {
    onBurgerChange(salad, cheese, meat, bacon);
  }, [salad, cheese, meat, bacon]);

  return (
    <Fragment>
      <h3 className="text-center">Custom your burger</h3>
      <Table borderless className="p-5">
        <thead>
          <tr>
            <th>Topping</th>
            <th className="text-center">Option</th>
            <th className="text-center">Unit Price</th>
            <th className="text-center">Price</th>
          </tr>
        </thead>
        <tbody>
          {toppings.map(({ name, price }) => {
            return (
              <tr key={`topping-${name}`}>
                <td className="fw-bold text-capitalize">{name}</td>
                <td className="text-center">
                  <Button
                    variant="warning"
                    className="me-1"
                    onClick={() => decrementTopping(name)}
                  >
                    Less
                  </Button>
                  <Button variant="info" onClick={() => incrementTopping(name)}>
                    More
                  </Button>
                </td>
                <td className="text-center">{price}</td>
                <td className="text-center">{getTopping(name)}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={3} className="fw-bold">
              Total cost:
            </td>
            <td className="text-center fw-bold">{total} $</td>
          </tr>
        </tbody>
      </Table>
      <div className="actions">
        <Button variant="primary" className="me-1">
          Order Now
        </Button>
        <Button variant="danger">Reset</Button>
      </div>
    </Fragment>
  );
};

export default BurgerOrder;
