import React, { useState } from "react";
import { Navbar } from "./components";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ProductScreen,
  Signup,
  Signin,
  Shop,
  Contact,
  CartScreen,
  About,
  Error,
  Checkout,
} from "./pages";
import { BankDetails, Footer } from "./container";
import CartContext from "./contexts/CartContext";
import {ViewOrder, AddProduct} from "./admin";

function App() {
  const [cartNum, setCartNum] = useState(0);
  return (
    <BrowserRouter>
      <div>
        <CartContext.Provider value={{ cartNum, setCartNum }}>
          <Navbar />
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/vieworder" element={<ViewOrder/>}/>
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/bankdetails" element={<BankDetails/>}/>
          </Routes>
          <Footer />
        </CartContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
