import { Outlet } from 'react-router-dom';

/**
 * Основной лейаут для сайта из шапки и основного контента, который меняется в зависимости от роута
 * */

export const BaseLayout = () => (
  <>
    {/* <Header /> */}
    <main className='content'>
      <Outlet />
    </main>
  </>
);
