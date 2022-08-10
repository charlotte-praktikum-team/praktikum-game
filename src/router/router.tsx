import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '@/router/routes';

import { CenteredLayout } from '@/layouts/centeredLayout/centeredLayout';
import { BaseLayout } from '@/layouts/baseLayout/baseLayout';
import { RequireAuth } from '@/router/requireAuth';

const Forum = React.lazy(() => import('@/pages/forum/forum'));

export const Router = () => (
  <Routes>
    <Route element={<CenteredLayout />}>
      <Route path={routes.login.path} element={<h1>Вход</h1>} />
      <Route path={routes.register.path} element={<h1>Регистрация</h1>} />
      <Route path={routes.notFound.path} element={<h1>404</h1>} />
      <Route path={routes.error.path} element={<h1>500</h1>} />
    </Route>

    <Route element={<RequireAuth />}>
      <Route element={<BaseLayout />}>
        <Route path={routes.profile.path} element={<h1>Профиль</h1>} />
        <Route path={routes.leaderboard.path} element={<h1>Лидерборд</h1>} />
      </Route>

      <Route path={routes.forum.path} element={<BaseLayout />}>
        <Route
          index
          element={
            <Suspense>
              <Forum />
            </Suspense>
          }
        />
        <Route path=':sectionId' element={<h1>Раздел форума</h1>} />
        <Route path=':sectionId/:topicId' element={<h1>Тема форума</h1>} />
      </Route>

      <Route path={routes.game.path} element={<BaseLayout />}>
        <Route index element={<h1>Стартовый экран игры</h1>} />
        <Route path='run' element={<h1>Игра на canvas</h1>} />
      </Route>
    </Route>
  </Routes>
);
