import React, { useState } from "react";
import { Navbar } from "./components";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
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
  ProfilePage,
} from "./pages";
import { BankDetails, Footer } from "./container";
import CartContext from "./contexts/CartContext";
import { ViewOrder, AddProduct, AdminPage } from "./admin";
import ProductContext from "./contexts/ProductContext";
import AuthContext from "./contexts/AuthContext";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [prouctData, setProductData] = useState({});
  // const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <ProductContext.Provider value={{ prouctData, setProductData }}>
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
              <Route path="/vieworder" element={<ViewOrder />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/bankdetails" element={<BankDetails />} />
              <Route path="/profilepage" element={<ProfilePage />} />
              <Route path="/adminpage" element={<AdminPage />} />
            </Routes>
            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Footer />
          </CartContext.Provider>
        </ProductContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
