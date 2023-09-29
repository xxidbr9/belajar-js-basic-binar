import React from 'react'
import { Provider } from "react-redux";
import store from './store/store';
import TodoPage from './pages/todos';

const RootApp = () => {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  )
}

export default RootApp