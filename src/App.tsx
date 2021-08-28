import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Examples
import DropdownEG from "./examples/Dropdown";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/dropdown" component={DropdownEG} />
        <Route path="/" component={DropdownEG} />
      </Switch>
    </div>
  );
};

export default App;
