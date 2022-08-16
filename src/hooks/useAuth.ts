import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AuthService, SignInPayload, SignUpPayload } from '@/services/auth';
import { ServerError } from '@/types';
import { routes } from '@/router/routes';

export const useAuth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const handleError = (err: AxiosError<ServerError>) => {
    alert(err.response?.data.reason ?? err.message);
    setIsLoading(false);
  };

  const getUser = useCallback(async () => {
    try {
      const userData = await AuthService.getUser();
      // TODO задиспатчить в стор
      console.log(userData);
      setIsLoading(false);

      if (pathname === routes.login.path || pathname === routes.register.path) {
        navigate(routes.game.path);
      }
    } catch (err) {
      handleError(err as AxiosError<ServerError>);
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
      // TODO очистить стор юзера
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
    handleError,
    getUser,
  };
};
