import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import { PRACTICUM_ORIGIN } from '../utils/constants';
import { routes } from '../router/routes';

const pathArray = Object.values(routes).map((route) => route.path);

const getUser = (req: Request) => {
  console.log(req);
  try {
    if (req.headers.cookie && req.headers.cookie.includes('authCookie')) {
      const { data } = axios.get(`${PRACTICUM_ORIGIN}/auth/user`, {
        headers: { Cookie: req.headers.cookie },
      });

      return data;
    }

    return null;
  } catch (e) {
    return null;
  }
};

export default async (req: Request, res: Response, next: NextFunction) => {
  const user = await getUser(req);
  req.user = user;

  if (user) {
    next();
  } else {
    if (!pathArray.includes(req.url)) {
      return res.status(401).send();
    }
    if (pathArray.includes(req.url) && req.url !== '/') {
      return res.redirect('/');
    }
  }

  next();
};
