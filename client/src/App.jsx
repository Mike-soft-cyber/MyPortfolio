import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PortFolio from './page/Portfolio'
import React from 'react'

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PortFolio />}/>
      </Routes>
    </BrowserRouter>
  )
}