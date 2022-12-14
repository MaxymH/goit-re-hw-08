import { Navigate, Outlet } from 'react-router-dom';

import useIsLogin from '../../../hooks/useIsLogin';

const PublicRoutes = () => {
  const isLogin = useIsLogin();

  if (isLogin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PublicRoutes;