import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Collection from './Page/Collection'
import About from './Page/About'
import Cart from './Page/Cart'
import Order from './Page/Order'
import PlaceOrder from './Page/PlaceOrder'
import Product from './Page/Product'
import Contact from './Page/Contact'
import Login from './Page/Login'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/placeOrder' element={<PlaceOrder/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App