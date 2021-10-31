import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import {GlobalStyle} from './globalStyles'
import { Home } from './pages/Home';

function App() {
  return (
      <>
      <GlobalStyle/>
      <Navbar/>
      <Home/>
     </>
  );
}

export default App;
