import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { SignInPayload, SignUpPayload } from '@/services/auth';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectIsAuth, selectIsLoading } from '@/store/user/selectors';
import { routes } from '@/router/routes';
import { getUserData, logout, signIn, signUp } from '@/store/user/thunk';

export const useAuth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const isAuth = useAppSelector(selectIsAuth);

  const getUser = useCallback(async () => {
    await dispatch(getUserData());

    if (pathname === routes.login.path || pathname === routes.register.path) {
      navigate(routes.game.path, { replace: true });
    }
  }, []);

  const handleLogin = useCallback(async (data: SignInPayload) => {
    await dispatch(signIn(data));
    await getUser();
  }, []);

  const handleRegister = useCallback(async (data: SignUpPayload) => {
    await dispatch(signUp(data));
    await getUser();
  }, []);

  const handleLogout = useCallback(async () => {
    await dispatch(logout());
    navigate(routes.login.path);
  }, []);

  return {
    isLoading,
    isAuth,
    handleLogin,
    handleRegister,
    handleLogout,
    getUser,
  };
};
