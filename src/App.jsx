
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProductView from './pages/ProductView'
import Footer from './components/Footer'
import Header from './components/Header'
import Pnf from './pages/Pnf'
import Wishlist from './pages/Wishlist'
import { Routes,Route } from 'react-router-dom'


import './bootstrap.min.css'
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='product/:id' element={<ProductView/>}/>
        <Route path='wish' element={<Wishlist/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
