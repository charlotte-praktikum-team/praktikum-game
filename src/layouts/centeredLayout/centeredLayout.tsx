import { Outlet } from 'react-router-dom';
import './centeredLayout.css';

/**
 * Лейаут для центрирования контента, который меняется в зависимости от роута. Без шапки и футера.
 * */

export const CenteredLayout = () => (
  <main className='content content_centered'>
    <Outlet />
  </main>
);
