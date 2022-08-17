import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { RequireAuth } from './requireAuth';

import { CenteredLayout } from '@/layouts/centeredLayout/centeredLayout';
import { BaseLayout } from '@/layouts/baseLayout/baseLayout';

const Forum = lazy(() => import('@/pages/forum/forum'));
const ForumTopicsList = lazy(() => import('@/pages/forumTopicsList/forumTopicsList'));
const ForumTopic = lazy(() => import('@/pages/forumTopic/forumTopic'));

const Login = lazy(() => import('@/pages/login/login'));
const Register = lazy(() => import('@/pages/register/register'));
const Leaderboard = lazy(() => import('@/pages/leaderboard/leaderboard'));
const Dashboard = lazy(() => import('@/pages/dashboard/dashboard'));
const Game = lazy(() => import('@/pages/game/game'));

export const Router = () => (
  <Routes>
    <Route element={<CenteredLayout />}>
      <Route path={routes.login.path} element={<Login />} />
      <Route path={routes.register.path} element={<Register />} />
      <Route path={routes.notFound.path} element={<h1>404</h1>} />
      <Route path={routes.error.path} element={<h1>500</h1>} />
    </Route>

    <Route element={<RequireAuth />}>
      <Route element={<BaseLayout />}>
        <Route path={routes.profile.path} element={<h1>Профиль</h1>} />
        <Route path={routes.leaderboard.path} element={<Leaderboard />} />
      </Route>

      <Route path={routes.forum.path} element={<BaseLayout />}>
        <Route index element={<Forum />} />
        <Route path=':sectionId' element={<ForumTopicsList />} />
        <Route path=':sectionId/:topicId' element={<ForumTopic />} />
      </Route>

      <Route path={routes.game.path} element={<BaseLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path={routes.gameRun.path} element={<Game />} />
    </Route>
  </Routes>
);
