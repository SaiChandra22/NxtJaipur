import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUpForm from "./components/SignUpForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUpForm} />
        <Route exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
