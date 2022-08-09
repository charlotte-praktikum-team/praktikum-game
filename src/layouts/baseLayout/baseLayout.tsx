import { Outlet } from 'react-router-dom';

/**
 * Main layout for page with header.
 * */

export const BaseLayout = () => (
  <>
    {/* <Header /> */}
    <main className='content'>
      <Outlet />
    </main>
  </>
);
