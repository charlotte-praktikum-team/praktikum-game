import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { RequireAuth } from './requireAuth';

import { CenteredLayout } from '@/layouts/centeredLayout/centeredLayout';
import { BaseLayout } from '@/layouts/baseLayout/baseLayout';

const Forum = lazy(() => import('@/pages/forum/forum'));
const ForumTopicsList = lazy(() => import('@/pages/forumTopicsList/forumTopicsList'));
const ForumTopic = lazy(() => import('@/pages/forumTopic/forumTopic'));

const Profile = lazy(() => import('@/pages/profile/profile'));
const ProfileUser = lazy(() => import('@/pages/profileUser/profileUser'));
const ProfilePassword = lazy(() => import('@/pages/profilePassword/profilePassword'));

const Login = lazy(() => import('@/pages/login/login'));
const Register = lazy(() => import('@/pages/register/register'));
const Leaderboard = lazy(() => import('@/pages/leaderboard/leaderboard'));
const Dashboard = lazy(() => import('@/pages/dashboard/dashboard'));
const Game = lazy(() => import('@/pages/game/game'));

const ErrorPage = lazy(() => import('@/pages/error/error'));

export const Router = () => (
  <Routes>
    <Route element={<CenteredLayout />}>
      <Route path={routes.login.path} element={<Login />} />
      <Route path={routes.register.path} element={<Register />} />
      <Route path={routes.notFound.path} element={<ErrorPage title='404' description='не туда попали' />} />
      <Route path={routes.error.path} element={<ErrorPage title='500' description='уже фиксим' />} />
    </Route>

    <Route element={<RequireAuth />}>
      <Route path={routes.profile.path} element={<BaseLayout />}>
        <Route index element={<Profile />} />
        <Route path='user' element={<ProfileUser />} />
        <Route path='password' element={<ProfilePassword />} />
      </Route>

      <Route element={<BaseLayout />}>
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
