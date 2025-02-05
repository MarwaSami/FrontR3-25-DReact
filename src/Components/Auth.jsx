import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Auth() {
    return (
        localStorage.getItem('token') ? <Outlet /> : <Navigate to='/form' />
    )
}

export default Auth