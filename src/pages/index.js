import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Importar páginas
import Home from "./Home";
import Worlds from "./Worlds";
import Login from "./Login";
import Lesson from "./Lesson";
import Exercise from "./Exercise";
// Importar estilos globais
import "./global.css";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/worlds">
          <Worlds />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/lesson">
          <Lesson />
        </Route>
        <Route exact path="/exercise">
          <Exercise />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
