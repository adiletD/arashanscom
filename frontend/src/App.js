import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
    
    // the class => className
    // put / before the image sources
    //the two variables are created
    //replace the "s eith }s in the functions in html
    //& remove the round brackets
    //onclick --> onClick



  const openMenu =() =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu =() =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

    
  return (
      <BrowserRouter>

    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">Arashan</Link>
                
            </div>
            <div className="header-links">
                <a href="cart.html">Cart  </a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">Kalpaks</a>
                </li>
                <li>
                    <a href="index.html">Coats</a>
                </li>
                <li>
                    <a href="index.html">Socks</a>
                </li>
            </ul>
        </aside>
        {/*  
            - delete all the product items, leace only one
            - access the product object in products
            - rename the static values
            - should create products in data.js file with
            objects as products 

        
        
        */}
        <main className="main">
            <div className="content">
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/" exact={true} component={HomeScreen} />
            </div>

        </main>
        <footer className="footer">
            All rights reserved.
        </footer>
    </div>

    </BrowserRouter>

  );
}

export default App;
