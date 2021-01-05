import React, { useReducer } from 'react';
import { reducerToDo } from './reducerToDo';
import './styles.css';

const initialState = [
  {
    id: new Date().getTime(),
    toDo: 'Comprar ropa',
    done: false,
  },
];

export const TodoApp = () => {
  const [toDos] = useReducer(reducerToDo, initialState);

  console.log(toDos);

  return (
    <div>
      <h1>TodoApp ({toDos.length})</h1>
      <hr />

      <ul>
        {
            toDos.map(todo => {
            <li key={todo.id} className="list-group-item">
                {todo.done}
            </li>;
        })}
      </ul>
    </div>
  );
};
