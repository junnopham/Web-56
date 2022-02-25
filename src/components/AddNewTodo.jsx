import { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const AddNewTodo = ({ onClickAdd }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClickAdd(todo);
  };

  return (
    <Row>
      <Card border="light">
        <Card.Body>
          <Card.Title>Add Item</Card.Title>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="New Item Title"
                value={todo}
                onChange={handleChange}
              />
              <Button variant="primary" type="submit">
                Add
              </Button>
            </InputGroup>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default AddNewTodo;
