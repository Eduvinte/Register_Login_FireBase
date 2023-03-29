import { Route, Routes } from 'react-router-dom';
import React from 'react';

// Pages 
import SignIn from '../pages/signIn/SignIn';
import SignUp from '../pages/signUp/SignUp';
import Dashboard from '../pages/dashboard/Dashboard';

import Private from './Private';

function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Dashboard' element={<Private><Dashboard /></Private>} />
    </Routes>
  )
}

export default RoutesApp