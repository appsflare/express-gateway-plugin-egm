import { Application, Request, Response } from 'express';

export function adminPing(adminExpressApp: Application) {
  adminExpressApp.get('/egm/ping', (req: Request, res: Response) => {
    res.send("pong");
  });
};
