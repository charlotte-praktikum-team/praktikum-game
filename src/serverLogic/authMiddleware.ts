import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
  next();
};
