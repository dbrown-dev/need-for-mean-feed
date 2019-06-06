import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Error404 from "./components/Error404/Error404";
import BusinessDetails from './components/BusinessDetails/BusinessDetails'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id"  component={BusinessDetails} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
