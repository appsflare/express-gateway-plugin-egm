import 'express-gateway';
import { Request, Response, NextFunction } from 'express';

export const egmPolicy = {
  name: 'egm',
  policy: (actionParams: any) => {
    return (req: Request & Express.Request, res: Response, next: NextFunction) => {      
      // eslint-disable-next-line no-console
      console.log('executing policy-from-example-plugin with params', actionParams);
    };
  }
};
