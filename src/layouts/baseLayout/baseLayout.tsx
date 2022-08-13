import { Outlet } from 'react-router-dom';
import MainHeader from '@/pages/components/mainHeader/mainHeader';

/**
 * Main layout for page with header.
 * */

export const BaseLayout = () => (
  <>
    <MainHeader />

    <main className='content'>
      <Outlet />
    </main>
  </>
);
