import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Screens
import Home from "./screens/home";

// Examples
import DropdownEG from "./examples/Dropdown";
import SelectEG from "./examples/Select";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/dropdown" component={DropdownEG} />
        <Route exact path="/select" component={SelectEG} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
