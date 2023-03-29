import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

function Dashboard() {
  const { logout } = useContext(AuthContext)

  function handleLogout(){
    logout()
  }

  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard