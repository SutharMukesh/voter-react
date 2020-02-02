import React from "react";
import Register from "./components/register";
import ReadVoter from "./components/readvoter";
import "./App.css";
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App d-flex justify-content-center">
        {/* <Register/> */}
        <ReadVoter />
      </div>
    </Provider>
  );
}

export default App;
