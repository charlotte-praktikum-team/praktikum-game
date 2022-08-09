import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '@/router/routes';

/**
 * Use this to protect private pages.
 * */

export const RequireAuth = () => {
  // TODO get variable from store
  const isAuthorized = true;

  if (!isAuthorized) {
    // Redirect to login page
    return <Navigate to={routes.login.path} />;
  }

  return <Outlet />;
};
