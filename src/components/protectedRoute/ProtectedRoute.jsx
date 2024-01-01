import React from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {token}=useAuth()
  return (
    <div>
        {token?children:<Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoute