import { Request } from 'express';
export const urlMatch = {
  name: 'url-match',
  handler: function (req: Request, conditionConfig: any) {
    return (conditionConfig.expected === req.url);
  }
};
