import { Route, Routes } from 'react-router-dom';
import { routes } from '@/router/routes';

export const Router = () => (
  <Routes>
    <Route>
      <Route path={routes.login.path} element={<h1>Вход</h1>} />
      <Route path={routes.register.path} element={<h1>Регистрация</h1>} />
      <Route path={routes.notFound.path} element={<h1>404</h1>} />
      <Route path={routes.error.path} element={<h1>500</h1>} />
    </Route>

    <Route>
      <Route path={routes.profile.path} element={<h1>Профиль</h1>} />
      <Route path={routes.leaderboard.path} element={<h1>Лидерборд</h1>} />
    </Route>

    <Route path={routes.forum.path}>
      <Route index element={<h1>Форум</h1>} />
      <Route path=':sectionId' element={<h1>Раздел форума</h1>} />
      <Route path=':sectionId/:topicId' element={<h1>Тема форума</h1>} />
    </Route>

    <Route path={routes.game.path}>
      <Route index element={<h1>Стартовый экран игры</h1>} />
      <Route path='run' element={<h1>Игра на canvas</h1>} />
    </Route>
  </Routes>
);
