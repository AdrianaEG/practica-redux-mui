import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Routes, Route, Navigate} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { firebaseAuth } from '../firebase/config';
import { FoodRoutes } from '../foodApp/routes/FoodRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { login, logout } from '../store';

export const AppRouter = () => {
  const {status} = useCheckAuth();

  return (
    <Routes>
      {status==='authenticated' ?
        <Route path="/*" element={<FoodRoutes />}/>
      :
        <Route path="/auth/*" element={<AuthRoutes/>}/>
      }
      <Route path="/*" element={<Navigate to='/auth/login'/>}/>
    </Routes>
  )
}
