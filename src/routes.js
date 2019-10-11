import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TodoList from './pages/list';
import AddNewTodo from './pages/newTodo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={TodoList} exact />
      <Route path="/adicionar-novo-todo" component={AddNewTodo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;