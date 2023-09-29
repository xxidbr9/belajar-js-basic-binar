import React from 'react'
import { Provider } from "react-redux";
import store from './store/store';
import UserPage from './pages/user';


const RootApp = () => {
  return (
    <Provider store={store}>
      <UserPage />
    </Provider>
  )
}

export default RootApp