import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import { PRACTICUM_ORIGIN } from '../utils/constants';
import { routes } from '../router/routes';

const pathArray = Object.values(routes).map((route) => route.path);

export default async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.cookie && req.headers.cookie.includes('authCookie')) {
    await axios
      .get(`${PRACTICUM_ORIGIN}/auth/user`, {
        headers: { Cookie: req.headers.cookie },
      })
      .then((data) => {
        if (pathArray.includes(req.url)) {
          req.user = data.data;
        } else {
          res.status(401);
        }
      });
  }
  next();
};
