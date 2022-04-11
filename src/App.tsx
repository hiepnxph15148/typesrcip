import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { add, list, remove, update } from './api/product';
import axios from 'axios';
import type { IProduct } from './types/product';
import type { Categories } from './types/catrgories';
import AdminLayout from './page/layouts/AdminLayout';
import WebsiteLayout from './page/layouts/WebsiteLayout';
import Dashboard from './page/Dashboard';
import ProductManager from './page/ProductManager';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import ProductAdd from './page/ProductAdd';
import ProductEdit from './page/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signup from './page/Signup';
import Signin from './page/Signin';
import ProductPage from './page/ProductPage';
import Categori from './page/Categories';
import AddCategpries from './page/AddCategpries';
import EditCategory from './page/EditCategory';
import { addct, getall, updatect } from './api/categories';
import Category from './page/Categories';
import { TypeCart } from './types/cart';
import { addCard } from './api/cart';
import Categoriespage from './page/Categorii';
import DetaillCategory from './page/DetaillCategory';
import { Card } from 'react-bootstrap';
import Cart from './page/cart';



function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setcategories] = useState<Categories[]>([]);
  const [carts, setcart] = useState<TypeCart[]>([])
  useEffect(() => {
    const getCT = async () => {
      const { data } = await getall()
      setcategories(data)
    }
    getCT()
  }, [])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (id: number) => {
    // call api
    remove(id);
    // reRender
    setProducts(products.filter(item => item._id !== id));
  }

  const removeCT = (id: number) => {
    updatect(id)
    setcategories(categories.filter(item => item._id !==id))

  }

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const AddCategory = async (category: Categories) => {
    const { data } = await addct(category)
    setcategories([...categories, data])
  }

  const xonHandleUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data.id ? data : item));
  }
  const UpdateCaTe = async (editcategory: Categories) => {
    const { data } = await updatect(editcategory)
    setcategories(categories.map(item => item._id == data._id ? data : item))
  }
  const AddCart = async (productCR: TypeCart) => {
    const addCr = async () => {
      const { data } = await addCard(productCR)
      setcart([...carts, data])
    }
    addCr()
  }
  return (
    <div className="App  m-auto ">
      <header>
        <ul className='flex justify-around bg-white'>
          <li><a href="/"><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757348/logo-dark_ksvqsf.png" className="block px-4 py-2 w-[200px]" alt=""></img></a></li>
          <div className='flex '>
            <li className='class="block px-4 py-3 hover:text-white '>
              <NavLink className='text-black font-bold text-base' to="/">Home Page</NavLink>
            </li>
            <li className='class="block px-4 py-3 hover:text-white '>
              <NavLink className='text-black font-bold text-base' to="/product">Product Page</NavLink>
            </li>
            <li className='class="block px-4 py-3 hover:text-white'>
              <NavLink className='text-black font-bold text-base' to="/about">About</NavLink>
            </li>
            <li className='class="block px-4 py-3 hover:text-white'>
              <NavLink className='text-black font-bold text-base' to="/signin">Signin</NavLink>
            </li>
            <li className='class="block px-4 py-3  hover:text-white'>
              <NavLink className='text-black font-bold text-base' to="/signup">Signup</NavLink>
            </li>
          </div>
          <div className='flex'>
            <li className='block px-4 py-3 hover:text-white'>
              <NavLink to='cart'><i className="fa-solid fa-cart-shopping  text-black  "></i></NavLink>
            </li>
          
            <li className='block px-4 py-3 hover:text-white'>
              <a href=""><i className="fa-solid fa-magnifying-glass text-black"></i></a>
            </li>
          </div>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path="product">
              <Route path='categories'>
                <Route element={<Categoriespage category={[]} />} />
              </Route>
              <Route index element={<ProductPage product={products} />} />
              <Route path=":id" element={<ProductDetail onAddCart={AddCart} />} />
            </Route>
            <Route path='cart' element={<Cart/>} />
            <Route path="about" element={<h1 className='text-center py-4'>About page</h1>} />
          </Route>
          <Route path='categories'>
            <Route index element={<Categoriespage category={[]} />} />
          </Route>
          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem} /></PrivateRouter>} />
              <Route path=":id/edit" element={<ProductEdit onPut={xonHandleUpdate} name={''} price={0} />} />
              <Route path="add" element={<ProductAdd name="" onAdd={onHandleAdd} />} />
            </Route>
            <Route path='categories'>
              <Route index element={<PrivateRouter><Category category={categories} onRemoveCt={removeCT} /></PrivateRouter>} />
              <Route path=':id/edit' element={<EditCategory onUpdatect={UpdateCaTe} />} />
              <Route path='add' element={<AddCategpries onAddCT={AddCategory} name="" />} />
            </Route>
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
