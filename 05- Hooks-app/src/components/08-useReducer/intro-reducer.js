const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

const toDoReducer = function (state = initialState, action) {
  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }
  return state;
};

let toDos = toDoReducer();

const newToDo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
};

const action = {
  type: 'agregar',
  payload: newToDo,
};

console.log(toDos);
