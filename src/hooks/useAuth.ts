import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SignInPayload, SignUpPayload } from '@/services/auth';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectErrorMessage, selectIsAuth, selectIsLoading, selectServiceId } from '@/store/user/selectors';
import { getUserData, logout, signIn, signUp, getServiceId as getServiceIdThunk, getUserDataByOAuth } from '@/store/user/thunk';
import { routes } from '@/router/routes';
import { setErrorMessage } from '@/store/user/slice';

export const useAuth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const isAuth = useAppSelector(selectIsAuth);
  const errorMessage = useAppSelector(selectErrorMessage);
  const serviceId = useAppSelector(selectServiceId);

  const getUser = useCallback(async () => {
    if (code) {
      return dispatch(getUserDataByOAuth(code));
    }

    return dispatch(getUserData());
  }, [code]);

  const getServiceId = useCallback(() => {
    dispatch(getServiceIdThunk());
  }, []);

  const handleLogin = useCallback(async (data: SignInPayload) => {
    await dispatch(signIn(data));

    if (!errorMessage) {
      await getUser();
    }
  }, []);

  const handleRegister = useCallback(async (data: SignUpPayload) => {
    await dispatch(signUp(data));

    if (!errorMessage) {
      await getUser();
    }
  }, []);

  const handleLogout = useCallback(async () => {
    await dispatch(logout());
    navigate(routes.login.path);
  }, []);

  const clearErrorMessage = useCallback(() => {
    dispatch(setErrorMessage(''));
  }, []);

  return {
    isLoading,
    isAuth,
    serviceId,
    getServiceId,
    handleLogin,
    handleRegister,
    handleLogout,
    getUser,
    clearErrorMessage,
  };
};
