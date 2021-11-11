import React from 'react';
import './App.css'
import NavBar from './Components/NavBar';
import Drawer from './Components/Drawer';
import Payments from './Components/Payments';
import Coupons from './Components/Coupons';
import Products from './Components/Products';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Drawer/>
      <div className="grid-app">
        <div><Table/></div>
        <div><Products/></div>
        <div><Coupons/></div>
        <div><Payments/></div>
      </div>
    </div>
  );
}

export default App;
