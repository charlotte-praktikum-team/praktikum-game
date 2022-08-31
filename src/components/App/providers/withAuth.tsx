import { ReactElement, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const withAuth = (Component: () => ReactElement) => () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const { getUser, clearErrorMessage } = useAuth();

  useEffect(() => {
    getUser().finally(() => {
      clearErrorMessage();
      setIsCheckingAuth(false);
    });
  }, []);

  if (isCheckingAuth) {
    return <p>Загрузка...</p>;
  }

  return <Component />;
};
