import {Routes, Route, Navigate} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FoodRoutes } from '../foodApp/routes/FoodRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<FoodRoutes />}/>
      <Route path="/auth/*" element={<AuthRoutes/>}/>
    </Routes>
  )
}
