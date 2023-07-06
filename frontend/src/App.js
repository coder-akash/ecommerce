//import React, { useEffect, useState } from 'react'
import {Component} from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'


import Login from './components/Login'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute';
import CheckOut from './components/CheckOut'
import Payment from './components/Payment'
import Order from './components/Orderlist'
import ContactUs from './components/ContactUs'
import { ProductCountProvider } from './context/ProductCountContext'

class App extends Component {
     
  render() {
  return (
    <BrowserRouter>
      <ProductCountProvider>
      <Routes>
          
          <Route path='/login' Component={Login}/>
          <Route path='/' element={<ProtectedRoute component={<Home />} />} />
          <Route path='/products' element={<ProtectedRoute component={<Products />} />} />
          <Route path='/products/:id' element={<ProtectedRoute component={<ProductItemDetails />} />}/>
          <Route path='/cart' element={<ProtectedRoute component={<Cart />} />} />
          <Route path='/checkout' element={<ProtectedRoute component={<CheckOut />} />} />
          <Route path='/payment' element={<ProtectedRoute component={<Payment />} />} />
          <Route path='/myorders' element={<ProtectedRoute component={<Order />} />} />
          <Route path='/contactus' element={<ProtectedRoute component={<ContactUs />} />} />
          <Route  path = "/not-found" Component={NotFound}/>
          <Route  path='*' element={<Navigate replace to = '/not-found' />} />
      </Routes>
      </ProductCountProvider>
      
    
    </BrowserRouter>
  )
}
  }
export default App