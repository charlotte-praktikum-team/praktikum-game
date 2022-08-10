import { RouterType } from './types';

export const routes: RouterType = {
  landing: {
    path: '/',
    title: 'Ball Sort Puzzle',
    headerIcon: null,
  },
  login: {
    path: '/',
    title: 'Вход',
    headerIcon: null,
  },
  register: {
    path: '/sign-up',
    title: 'Регистрация',
    headerIcon: null,
  },
  profile: {
    path: '/profile',
    title: 'Профиль',
    headerIcon: 'user',
  },
  forum: {
    path: '/forum',
    title: 'Форум',
    headerIcon: 'forum',
  },
  leaderboard: {
    path: '/leaderboard',
    title: 'Лидеры',
    headerIcon: 'leaderboard',
  },
  game: {
    path: '/game',
    title: 'Игра',
    headerIcon: 'balls',
  },
  notFound: {
    path: '/*',
    title: 'Страница не найдена',
    headerIcon: null,
  },
  error: {
    path: '/error',
    title: 'Ошибка',
    headerIcon: null,
  },
};
