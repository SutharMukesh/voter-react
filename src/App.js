import React from "react";
import Register from "./components/register";
import ReadVoter from "./components/readvoter";
import "./App.css";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      {/* <Register/> */}
      <ReadVoter />
    </div>
  );
}

export default App;
