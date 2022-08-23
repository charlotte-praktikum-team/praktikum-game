import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/router/routes';

/**
 * Use this to protect private pages.
 * */

export const RequireAuth = () => {
  const { checkAuth } = useAuth();

  if (!checkAuth()) {
    return <Navigate to={routes.login.path} />;
  }

  return <Outlet />;
};
