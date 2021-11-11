import React from 'react';
import NavBar from './Components/NavBar';
import Drawer from './Components/Drawer';
import Payments from './Components/Payments';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Drawer/>
      <Payments/>
    </div>
  );
}

export default App;
