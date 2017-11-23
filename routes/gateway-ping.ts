import { Application, Request, Response } from 'express';

export function gatewayPing(gatewayExpressApp: Application) {
  gatewayExpressApp.get('/egm/ping', (req: Request, res: Response) => {    
    res.send('pong');
  });
};
