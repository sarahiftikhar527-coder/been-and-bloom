import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Search from "./Pages/Search";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute/ScrollToTopOnRoute";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Location from "./Pages/Location";
import Contact from "./Pages/Contact";
import CoffeeDetails from "./Pages/CoffeeDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTopOnRoute />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coffee/:slug" element={<CoffeeDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <ScrollToTop />

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;