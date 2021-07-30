import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Example from "./components/Example";

function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/test' component={Example}/>
            <Route  component={NotFound}/>
          </Switch>
        </Router>
      </>
  );
}

export default App;
