import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'

const Rotas = () =>{

    return(
        <BrowserRouter>
        <Routes>
      
        <Route exact path="/Home" Component={Home}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas