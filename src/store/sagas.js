import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../services/api';

function* getTodoList() {
  try {
    const response = yield call(api.get);

    yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } });

  } catch (error) {
    yield put({ type: 'FALIURE_TODO_LIST' });
  }
}

function* postNewTodo(action) {
  try {
    yield call(api.post, {
      title: action.payload.title,
      completed: action.payload.completed}
    );

    yield put({ type: 'SUCCESS_ADD_NEW_TODO'})
    
  } catch (error) {
    yield put({ type: 'FALIURE_ADD_NEW_TODO'})
    
  }
}

export default function* rootSaga() {
  yield takeLatest('REQUEST_TODO_LIST', getTodoList);
  yield takeLatest('REGISTERING_NEW_TODO', postNewTodo)
  
}