import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

const api = () => {
  return {
    get: () => axios.get(baseUrl),
    post: params => axios.post(baseUrl, {
      userId: 1,
      title: params.title,
      completed: params.completed
    })
  };
}

export default api();