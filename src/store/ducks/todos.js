import { createActions, createReducer } from 'reduxsauce';

// Criando as actions Types e os Creatores
export const { Types, Creators } = createActions({
  addTodo: ['text'],
}); 

// Criando os Reducers handlers
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

const addTodo = (state = INITIAL_STATE, action) => [
  ...state,
  {
    id: Math.random(),
    text: action.text
  }
];

// Criando o reducer
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
});
