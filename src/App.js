import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import MyProducts from './components/MyProducts/MyProducts';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
