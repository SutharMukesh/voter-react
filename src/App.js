import React from "react";
import Register from "./components/register";
import SearchVoter from "./components/readvoter";
import "./App.css";
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <SearchVoter />
      </div>
    </Provider>
  );
}

export default App;
