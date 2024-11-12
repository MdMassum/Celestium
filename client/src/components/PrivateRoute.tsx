import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../redux/store'; 

const PrivateRoute: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoute;
