import React from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {token}=useAuth()
  return (
    <div>
        {token?children:<Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoute