import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AuthService, SignInPayload, SignUpPayload } from '@/services/auth';
import { clearUserData, setUserData } from '@/store/user/slice';
import { useAppSelector } from '@/store';
import { selectIsAuth } from '@/store/user/selectors';
import { ServerError } from '@/types';
import { routes } from '@/router/routes';

export const useAuth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleError = (err: AxiosError<ServerError>) => {
    alert(err.response?.data.reason ?? err.message);
    setIsLoading(false);
  };

  const checkAuth = useCallback(() => useAppSelector(selectIsAuth), []);

  // eslint-disable-next-line consistent-return
  const getUser = useCallback(async () => {
    try {
      const userData = await AuthService.getUser();
      dispatch(setUserData(userData));
      setIsLoading(false);

      if (pathname === routes.login.path || pathname === routes.register.path) {
        navigate(routes.game.path, { replace: true });
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }, []);

  const handleLogin = useCallback(async (data: SignInPayload) => {
    try {
      setIsLoading(true);
      await AuthService.signIn(data);
      await getUser();
    } catch (err) {
      handleError(err as AxiosError<ServerError>);
    }
  }, []);

  const handleRegister = useCallback(async (data: SignUpPayload) => {
    try {
      setIsLoading(true);
      await AuthService.signUp(data);
      await getUser();
    } catch (err) {
      handleError(err as AxiosError<ServerError>);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await AuthService.logout();
      dispatch(clearUserData());
      navigate(routes.login.path);
    } catch (err) {
      handleError(err as AxiosError<ServerError>);
    }
  }, []);

  return {
    isLoading,
    handleLogin,
    handleRegister,
    handleLogout,
    checkAuth,
    getUser,
  };
};
