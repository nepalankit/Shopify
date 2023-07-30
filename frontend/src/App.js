import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/loginScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />

              <Route path="/login" element={<LoginScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id?" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
