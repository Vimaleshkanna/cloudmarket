import React from 'react'
import { Navigate, Route } from 'react-router'

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token")

  return token ? children : <Navigate to='/' replace/>
}

export default PrivateRoute