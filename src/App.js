import React from "react";
import Register from "./components/register";
import SearchVoter from "./components/readvoter";
import { Provider } from "react-redux";
import store from "./store";
import { NavLink, HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename='/'>
      <Provider store={store}>
        <nav className="container nav mt-5 nav-tabs justify-content-center">
          <NavLink
            className="nav-item nav-link mr-2"
            activeClassName="nav-item nav-link active"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            className="nav-item nav-link ml-2"
            activeClassName="nav-item nav-link active"
            to="/register"
          >
            Register
          </NavLink>
        </nav>
        <div className="d-flex">
          <Switch>
            <Route path="/search">
              <SearchVoter />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
