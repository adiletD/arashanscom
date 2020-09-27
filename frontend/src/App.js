import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu =() =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu =() =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

    
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">Arashan</a>
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

        <main className="main">
            <div className="content">
                <ul className="products">
                    <li>
                        <div className="product">
                            <img src="/images/kalpak1.jpg" alt="kaplak" className="product-image"/>
                            <div className="product-name">
                                <a href="product.html">
                                    Kalpak
                                </a>
                            </div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$30</div>
                            <div className="product-rating">4.6 Stars (15 reviews)</div>
                        </div>
                      
                    </li>
                    <li>
                        <div className="product">
                            <img src="/images/kalpak1.jpg" alt="kaplak" className="product-image"/>
                            <div className="product-name">
                                <a href="product.html">
                                    Kalpak
                                </a>
                            </div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$30</div>
                            <div className="product-rating">4.6 Stars (15 reviews)</div>
                        </div>
                        

                    </li>
                    <li>
                        <div className="product">
                            <img src="/images/kalpak1.jpg" alt="kaplak" className="product-image"/>
                            <div className="product-name">
                                <a href="product.html">
                                    Kalpak
                                </a>
                            </div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$30</div>
                            <div className="product-rating">4.6 Stars (15 reviews)</div>
                        </div>

                    </li>
                    <li>
                        <div className="product">
                            <img src="/images/kalpak1.jpg" alt="kaplak" className="product-image"/>
                            <div className="product-name">
                                <a href="product.html">
                                    Kalpak
                                </a>
                            </div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$30</div>
                            <div className="product-rating">4.6 Stars (15 reviews)</div>
                        </div>

                    </li>
                    <li>
                        <div className="product">
                            <img src="/images/kalpak1.jpg" alt="kaplak" className="product-image"/>
                            <div className="product-name">
                                <a href="product.html">
                                    Kalpak
                                </a>
                            </div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$30</div>
                            <div className="product-rating">4.6 Stars (15 reviews)</div>
                        </div>

                    </li>
                    <li>
                        <div className="product">
                            <img src="/images/kalpak1.jpg" alt="kaplak" className="product-image"/>
                            <div className="product-name">
                                <a href="product.html">
                                    Kalpak
                                </a>
                            </div>
                            <div className="product-brand">Adidas</div>
                            <div className="product-price">$30</div>
                            <div className="product-rating">4.6 Stars (15 reviews)</div>
                        </div>

                    </li>
                </ul>
            </div>

        </main>
        <footer className="footer">
            All rights reserved.
        </footer>
    </div>


  );
}

export default App;
