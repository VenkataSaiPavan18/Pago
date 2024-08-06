import React from 'react';
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MainPage from './Components/MainPage.jsx';


const App = () => {
  const divStyle = {
    width: '100vw',  // 100% of the viewport width
    height: 'auto', // 100% of the viewport height
    margin: 0,       // No margin
    backgroundColor: ' #50d8d7',
    background: 'radial-gradient(circle, #4A90E2, #192F5D)',
   

   };

  return (
    <div style={divStyle}>
<BrowserRouter>
     <Navbar/>
     <Routes>
   <Route path="/" element={<About/>} />
   <Route path="/demo" element={<MainPage/>} />
    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
