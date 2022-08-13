import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from '@/pages/components/mainHeader/mainHeader';
import { routes } from '@/router/routes';

/**
 * Main layout for page with header.
 * */

export const BaseLayout = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    setShowHeader(location.pathname !== routes.gameRun.path);
  }, [location.pathname]);

  return (
    <>
      {showHeader && <MainHeader />}

      <main className='content'>
        <Outlet />
      </main>
    </>
  );
};
