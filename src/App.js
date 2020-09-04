//imports for react
import React from 'react';
//import custom css
import './App.css';
//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importing bootstrap javascript
import 'bootstrap/dist/js/bootstrap.min.js';
//imports for routes
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';



//imports for components
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Model from './components/Model';


function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {/* Adding the routes to the pages */}
      
        <Switch>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/details" exact component={Details}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route component={Default}></Route>
        </Switch>
        <Model></Model>
      
    </React.Fragment>
  );
}

export default App;
