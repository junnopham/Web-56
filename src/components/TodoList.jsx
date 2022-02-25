import { Fragment } from "react";
import { Card, Row } from "react-bootstrap";

import TodoItem from "./TodoItem";

const TodoList = ({ todoList, filter = "", onClickDelete }) => {
  const data = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(filter.toString().toLowerCase())
  );

  return (
    <Row>
      <Card border="light">
        <Card.Body>
          <Card.Title>Todo List</Card.Title>
          <ul className="todo-list list-group">
            {todoList.length <= 0 && (
              <h5 className="text-center">
                No todo list, please add to see it!
              </h5>
            )}
            {data.length <= 0 && (
              <h5 className="text-center">No todo match!</h5>
            )}
            {data.map((todo, index) => {
              return (
                <TodoItem
                  todo={todo}
                  onClickDelete={onClickDelete}
                  key={`todo-${index}`}
                />
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default TodoList;
