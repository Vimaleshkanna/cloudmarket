import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Pages/Home'
import Login from '../Components/Pages/Login'
import Register from '../Components/Pages/Register'
import PrivateRoute from './PrivateRoute'
import Checkout from '../Components/Pages/Checkout'
import ProductDetails from '../Components/Pages/Home/ProductDetails'
import { LoginContainer, RegisterContainer } from '../Redux/Containers/authContainer'

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/register' element={<RegisterContainer />} />
            {/* Product details */}
            <Route path='/product/:id' element={<ProductDetails/>}/>
            {/* Private */}
            <Route path='/checkout' element ={<PrivateRoute><Checkout/></PrivateRoute>}/>
        </Routes>
    )
}

export default AppRoutes