import React from "react";
import { ITodo } from "../interfeces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  onToggle,
  onRemove
}) => {
  if (todos.length === 0) {
    return <h4 className="center">Пока дел нет</h4>
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
