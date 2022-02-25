import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import TodoList from "./components/TodoList";
import AddNewTodo from "./components/AddNewTodo";
import FilterTodo from "./components/FilterTodo";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Đi cafe với gấu", isCompleted: true },
    { id: 2, title: "Học ReactJS", isCompleted: false },
    { id: 3, title: "Học cách thổi nến", isCompleted: false },
    { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
    { id: 5, title: "Trade coin", isCompleted: false },
  ]);

  const [filter, setFilter] = useState("");

  const handleClickAdd = (todo) => {
    const lastItem = todoList.reduce((previous, current) =>
      previous.id > current.id ? previous : current
    );

    const newTodo = {
      id: lastItem.id++,
      title: todo,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  const handleClickDelete = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }

      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <Container>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <FilterTodo onChangeFilter={handleFilter} />
          <TodoList
            todoList={todoList}
            filter={filter}
            onClickDelete={handleClickDelete}
          />
          <AddNewTodo onClickAdd={handleClickAdd} />
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
}

export default App;
