import { Button } from "react-bootstrap";
import clsx from "clsx";

const TodoItem = ({ todo, onClickDelete }) => {
  const { id, title, isCompleted } = todo;

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={id}
    >
      <span
        className={clsx({
          "text-decoration-line-through": isCompleted,
          "text-muted": isCompleted,
        })}
      >
        {title}
      </span>
      <Button variant="danger" size="sm" onClick={() => onClickDelete(id)}>
        Delete
      </Button>
    </li>
  );
};

export default TodoItem;
