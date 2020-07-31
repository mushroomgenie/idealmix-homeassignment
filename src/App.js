import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content/content";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Content} />
        <Route exact path="/option2" component={Content} />
      </Router>
    </div>
  );
}

export default App;
