import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import './todoList.css';

import * as todosActions from '../../store/actions';

class TodoList extends Component {
  state = {
    todoCompleted: "items finished",
    todoIncompleted: "items"
  };

  getTodoStatus = (e, id) => {
    const name = e.target.name;
    const value = e.target.checked;

    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.props.reqTodoList();
  }

  render() {
    const { todos, loading, error } = this.props;
    const { todoCompleted, todoIncompleted } = this.state;

    return (
      <div className="todoList-container">
        <ul className="todoList-list">
          {todos.map(todo => (
            <li
              className={todo.completed ? todoCompleted : todoIncompleted}
              key={todo.id}
            >
              <p className="item-title">{todo.title}</p>
              <input
                name={todo.id}
                className="item-checkbox"
                type="checkbox"
                defaultChecked={todo.completed}
                onChange={e => this.getTodoStatus(e, todo.id)}
              />
            </li>
          ))}
        </ul>
        {loading && <img src={require('../../giphy.gif')} alt="carregando..." />}
        {error && <p>Falha ao carregar tarefas</p>}
        <div className="todoList-button">
          <Link className="button" to="/adicionar-novo-todo">
            adicionar nova tarefa
          </Link>
        </div>
      </div>
    );
  }
}

const stateProps = state => ({
  todos: state.data,
  loading: state.loading,
  error: state.error
});

const sendProps = sent => 
bindActionCreators(todosActions, sent);

export default connect(
  stateProps,
  sendProps
)(TodoList);