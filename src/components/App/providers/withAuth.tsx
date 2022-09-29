import React, { ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { routes } from 'router/routes';

export const withAuth = (Component: () => ReactElement) => () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { getUser, clearErrorMessage, getServiceId, isAuth } = useAuth();

  useEffect(() => {
    getUser().finally(() => {
      clearErrorMessage();
    });
  }, []);

  useEffect(() => {
    if (!isAuth) {
      getServiceId();
    }

    if (isAuth && (pathname === routes.login.path || pathname === routes.register.path)) {
      navigate(routes.game.path, { replace: true });
    }
  }, [isAuth]);

  return <Component />;
};
