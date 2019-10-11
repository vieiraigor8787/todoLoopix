export function reqTodoList() {
  return {
    type: 'REQUEST_TODO_LIST',
  }
}

export function addNewTodo(title, completed) {
  return {
    type: "REGISTERING_NEW_TODO",
    payload: {
      title,
      completed
    }
  };
}

