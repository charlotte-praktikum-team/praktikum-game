import { Outlet } from 'react-router-dom';
import './centeredLayout.css';

/**
 * Layout for page without header and footer. All contents centered on a page.
 * */

export const CenteredLayout = () => (
  <main className='content content_centered'>
    <Outlet />
  </main>
);
