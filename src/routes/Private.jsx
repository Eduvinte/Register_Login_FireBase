import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'
import { useContext } from 'react'

function Private({ children }) {
    const { signed, load } = useContext(AuthContext)
    if(load){
        return(
            <div></div>
        )
    }
    if(!signed){
        return <Navigate to='/'/>
    }
    return children
}

export default Private 