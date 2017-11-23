import { Application, Request, Response } from 'express';
import { EGConfig, EGMSettings, RouteContext } from '../types';

export function adminPlugins(adminExpressApp: Application, context: RouteContext) {

    adminExpressApp.get('/egm/config', (req: Request, res: Response) => {
        res.json(context.config);
    });
    adminExpressApp.get('/egm/settings', (req: Request, res: Response) => {
        res.json(context.settings);
    });
    adminExpressApp.get('/egm/plugins', (req: Request, res: Response) => {
        const { config } = context;
        const plugins = Object.keys(config.systemConfig.plugins).map(pluginName => {
            return { name: pluginName, ...config.systemConfig.plugins[pluginName] }
        });
        res.json(plugins);
    });
};
