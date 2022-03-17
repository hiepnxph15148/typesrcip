import { useEffect, useState } from 'react'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { list } from './api/product'
import axios from 'axios'
import { Route,Routes,NavLink, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import "./dashboard.css"
import {IProduct} from './types/product'
import WebsiteLayout from './page/layouts/WebsiteLayout'
import AdminLayout from './page/layouts/AdminLayout'
import Home from './page/Home'
import Dashboard from './types/Dashboard'
import ProductManager from './page/ProductManager'
import ProductDetail from './page/ProductDetail'
// const data = [
  // { id: 1, name: "Product A"}, // item
  // { id: 2, name: "Product B"}, // item
// ]

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState< IProduct []>([]);

  useEffect(() =>{
      const getProducts = async () =>{
        const {data} = await list();
        setProducts(data)
      }; 
      getProducts();
    },[])
  return (
    <div className="App">
        <header>
  <ul>
    <li>
        <NavLink to="/">Home Page</NavLink>
    </li>
    <li>
    <NavLink to="/products">Product Page</NavLink>
    </li>
    <li>
    <NavLink to="/about">About Page</NavLink>
    </li>
  </ul>
  </header>
    <main>
    <Routes>
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Home />} />
              <Route path="products">
                  <Route index  element={<h1>Hien thi san pham</h1>} />
                  <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="about" element={<h1>About page</h1>} />
            </Route>
            
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<ProductManager />} />
            </Route>
          </Routes>
    </main>
    
</div>
  )
}

export default App

