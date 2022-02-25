import { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const FilterTodo = ({ onChangeFilter }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onChangeFilter(filter);
    }
  };

  const handleClear = () => {
    setFilter("");
    onChangeFilter(filter);
  };

  return (
    <Row>
      <Card border="light">
        <Card.Body>
          <Card.Title>Filter Task (by name)</Card.Title>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Filter"
              value={filter}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            <Button variant="warning" onClick={() => handleClear()}>
              Clear
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default FilterTodo;
