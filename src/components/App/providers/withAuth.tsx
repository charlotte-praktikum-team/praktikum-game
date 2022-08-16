import { ReactElement, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export const withAuth = (Component: () => ReactElement) => () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const { getUser } = useAuth();

  useEffect(() => {
    getUser().finally(() => setIsCheckingAuth(false));
  }, []);

  if (isCheckingAuth) {
    return 'Загрузка...';
  }

  return <Component />;
};
