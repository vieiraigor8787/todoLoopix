const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  registeringTodo: false,
  successAddNewTodo: null,
  faliureAddNewTodo: null
}

export default function todos( state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_TODO_LIST":
      return { ...state, loading: true };
    case "SUCCESS_TODO_LIST":
      return {
        ...state,
        data: action.payload.data.data,
        loading: false,
        error: false
      };
    case "FALIURE_TODO_LIST":
      return { ...state, data: [], loading: false, error: true };
    case "REGISTERING_NEW_TODO":
      return { ...state, registeringTodo: true };
    case "SUCCESS_ADD_NEW_TODO":
      return {
        ...state,
        successAddNewTodo: true,
        faliureAddNewTodo: false,
        registeringTodo: false
      };
    case "FALIURE_ADD_NEW_TODO":
      return {
        ...state,
        successAddNewTodo: false,
        faliureAddNewTodo: true,
        registeringTodo: false
      };
    default:
      return state;
  }
}