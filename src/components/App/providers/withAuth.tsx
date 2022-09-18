import { ReactElement, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/router/routes';

export const withAuth = (Component: () => ReactElement) => () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const { getUser, clearErrorMessage, getServiceId, isAuth } = useAuth();

  useEffect(() => {
    getUser().finally(() => {
      clearErrorMessage();
      setIsCheckingAuth(false);
    });
  }, []);

  useEffect(() => {
    if (!isAuth && !isCheckingAuth) {
      getServiceId();
    }

    if (!isCheckingAuth && isAuth && (pathname === routes.login.path || pathname === routes.register.path)) {
      navigate(routes.game.path, { replace: true });
    }
  }, [isAuth, isCheckingAuth]);

  if (isCheckingAuth) {
    return <p>Загрузка...</p>;
  }

  return <Component />;
};
