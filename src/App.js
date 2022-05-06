import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyProducts from './Pages/MyProducts/MyProducts';
import Product from './Pages/Product/Product';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
 

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/myproducts' element={<MyProducts></MyProducts>}></Route>
         <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
         <Route path='/product/:productId' element={
           <RequireAuth>
             <Product></Product>
           </RequireAuth>
         }></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <ToastContainer />
    </div>
  );
}

export default App;
