import React from "react";
import Nav from "./Components/Navbar";
import Products from "./Pages/ProductPage/index";
import Account from "./Pages/AccountPage";
import Categories from "./Pages/CateogryPage";
import ProductDetails from "./Pages/ProductPage/ProductDetails"
import PincodePage from "./Pages/Pincode"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Switch>
          <Route path="/categories" exact component={Categories} />
          <Route path="/product" exact component={Products} />
          <Route path="/product/:id" component = {ProductDetails}/>
          <Route path="/account" exact component={Account}/>
          <Route path="/pincode" exact component={PincodePage}/>
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
