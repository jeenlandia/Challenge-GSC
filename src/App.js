import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Drawer from "./Components/Drawer";
import Payments from "./Components/Payments";
import Coupons from "./Components/Coupons";
import Products from "./Components/Products";
import Table from "./Components/Table";
import AppContext from "./AppContext";

function App() {
  const [cart, setCart] = useState([])
  return (
    <AppContext.Provider
      value={{
      state: {
        cart: cart
      },
      setCart: setCart
    }}>
    <div className="App">
      <NavBar />
      <Drawer />
      <div className="grid-app">
        <Table />
        <Products />
        <Coupons />
        <Payments />
      </div>
      </div>
      </AppContext.Provider>
  );
}

export default App;
