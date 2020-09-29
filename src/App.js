import React from "react";
import "./App.css";
// import Header from "./components/Header";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./containers/HomePage";

function App() {
  return (
    // <Router>
    //   <Switch>
    <div className="App">
      {/* <Header /> */}
      {/* <Route exact path="/" component={HomePage} /> */}
      {/* <Route exact path="/register" component={Register} /> */}
      {/* <Register /> */}
      <HomePage/>
    </div>
    //   </Switch>
    // </Router>
  );
}

export default App;
