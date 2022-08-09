import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '@/router/routes';

export const RequireAuth = () => {
  // TODO get variable from store
  const isAuthorized = true;

  if (!isAuthorized) {
    // Redirect to login page
    return <Navigate to={routes.login.path} />;
  }

  return <Outlet />;
};
