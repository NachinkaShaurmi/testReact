import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string):void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const [title, setTitle] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  }

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler} 
        onKeyPress={keyPressHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Покормить кота"
      />
      <label htmlFor="title" className="active">
        Введите задачу
      </label>
    </div>
  );
};
