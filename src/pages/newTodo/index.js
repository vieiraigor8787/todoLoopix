import React, { Component, createRef } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './addNewTodo.css'

import * as todosActions from "../../store/actions";

class AddNewTodo extends Component {
  constructor(props){
    super(props);
    this.textInput = createRef();
    this.checkBoxInput = createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addNewTodo(
      this.textInput.current.value,
      this.checkBoxInput.current.checked
    );
  }

  render() {
    const {
      successAddNewTodo,
      faliureAddNewTodo,
      registeringTodo
    } = this.props;
    
    return (
      <div className="addNewTodo-container">
        <h1>Criar nova tarefa</h1>
        <div className="addNewTodo-content">
          <form onSubmit={this.handleSubmit}>
            <input className="todoText" placeholder="Digite o nome da tarefa" type="text" ref={this.textInput} />
            <div className="checkBox-container">
              <label htmlFor="">Já concluiu?</label>
              <input type="checkbox" ref={this.checkBoxInput} />
            </div>
            <div className="addNewTodo-button">
              <button className="button" type="submit">
                CADASTRAR 
              </button>
            </div>
          </form>
        </div>
        {successAddNewTodo && <p>Tarefa cadastrada com sucesso!</p>}
        {faliureAddNewTodo && <p>falha ao cadastrar tarefa</p>}
        {registeringTodo &&  <img src={require('../../giphy.gif')} alt="cadastrando..." />}
        <Link className="back-button" to="/">
            Voltar
          </Link>
      </div>
    );
  }
} 

const stateProps = state => ({
  successAddNewTodo: state.successAddNewTodo,
  faliureAddNewTodo: state.faliureAddNewTodo,
  registeringTodo: state.registeringTodo
});

const sendProps = sent =>
  bindActionCreators(todosActions, sent);

export default connect(
  stateProps,
  sendProps
)(AddNewTodo);