import React from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/Home/index.jsx';


function Rotas() {
  return (
    <BrowserRouter>
    <Routes>
        <Route  exact  path="/" element={<Home/>}></Route>
      </Routes> 
    </BrowserRouter>
      
  );
}

export default Rotas;