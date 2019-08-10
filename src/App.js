import React from "react";
import "./App.css";
// import Header from "./components/Header";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    // <Router>
    //   <Switch>
    <div className="App">
      {/* <Header /> */}
      {/* <Route exact path="/register" component={Register} /> */}
      <Register />
    </div>
    //   </Switch>
    // </Router>
  );
}

export default App;
