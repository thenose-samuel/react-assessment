import React from "react";
import Nav from "./Components/Navbar";
import Products from "./Pages/ProductPage/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Switch>
          <Route path="/product" exact component={Products} />
          <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};
const Home = () => {
  return (
    <div class="place-content-center" className="Main content">
      <span class="mx-10 my-10 text-gray-500">This is the home page!</span>
    </div>
  );
};
export default App;
