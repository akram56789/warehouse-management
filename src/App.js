import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MyProducts from './Pages/MyProducts/MyProducts';
import Product from './Pages/Product/Product';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
 

function App() {
  return (
    <div  >
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/myproducts' element={<MyProducts></MyProducts>}></Route>
         <Route path='/product/:productId' element={
          <RequireAuth>
                <ProductDetail></ProductDetail>
          </RequireAuth>
          }></Route>
         <Route path='/product/:productId' element={
           <RequireAuth>
             <Product></Product>
           </RequireAuth>
         }></Route>
         <Route path='/manage' element={
           <RequireAuth>
             <ManageProducts></ManageProducts>
           </RequireAuth>
         }></Route>
         <Route path='/addproduct' element={
           <RequireAuth>
             <AddProduct></AddProduct>
           </RequireAuth>
         }></Route>
         <Route path='/myproducts' element={
           <RequireAuth>
            <MyProducts></MyProducts>
           </RequireAuth>
         }></Route>
          
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
       <ToastContainer />
    </div>
  );
}

export default App;
