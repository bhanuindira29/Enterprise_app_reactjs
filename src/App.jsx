import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import ProductManagement from './Components/ProductManagement/ProductMagagement'
import OrdersManagement from './Components/OrdersManagement/OrdersManagement';
import CalenderView from './Components/CalenderView/CalenderView';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="products" element={<ProductManagement/>}/>
        <Route path='orders' element={<OrdersManagement/>}/>
        <Route path='calender' element={<CalenderView/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
  )
}

export default App
