import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar'
import cart from "./pages/cart/cart";
import shop from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";

const App = () => {
  return (
    <div className="App">
        
        <ShopContextProvider>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" Component={shop}/>
                  <Route path="/cart" Component={cart}/>
              </Routes>
          </Router>
        </ShopContextProvider>

    </div>
  )
}

export default App