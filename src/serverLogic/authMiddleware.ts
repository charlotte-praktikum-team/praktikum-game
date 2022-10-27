import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import { PRACTICUM_ORIGIN } from '../utils/constants';
import { routes } from '../router/routes';

const pathArray = Object.values(routes).map((route) => route.path);

const getUser = async (req: Request) => {
  console.log('from server: ', req.url, req.headers);
  try {
    if (req.headers.cookie && req.headers.cookie.includes('authCookie')) {
      const { data } = await axios.get(`${PRACTICUM_ORIGIN}/auth/user`, {
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

  if (user || req.url === '/') {
    return next();
  }

  if (!pathArray.includes(req.url)) {
    return res.status(401).send();
  }
  
  if (pathArray.includes(req.url)) {
    return res.redirect('/');
  }
};
