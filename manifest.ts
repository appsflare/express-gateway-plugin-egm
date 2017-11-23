import 'express-gateway';
import { egmPolicy } from './policies';
import { urlMatch } from './conditions';
import { adminPing, adminPlugins, gatewayPing } from './routes';
import { EGConfig, EGMSettings } from './types';

interface PluginContext extends ExpressGateway.PluginContext {
  config: EGConfig;
  settings: EGMSettings;
}

export const version = '1.0.0';
export function init(pluginContext: PluginContext) {
  const { config, settings } = pluginContext;

  const routeContext = { config, settings };

  pluginContext.registerPolicy(egmPolicy);
  pluginContext.registerCondition(urlMatch);
  pluginContext.registerGatewayRoute(gatewayPing);
  pluginContext.registerAdminRoute(adminPing);
  pluginContext.registerAdminRoute(app => adminPlugins(app, routeContext));

  pluginContext.eventBus.on('hot-reload', function (e: { type: string, config: EGConfig }) {
    routeContext.config = e.config;
    const { plugins } = config.systemConfig;
    if (plugins && 'egm' in plugins) {
      routeContext.settings = plugins['egm'] as any;
    }
    console.log('hot-reload', e.type);
  });
  pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
    console.log('http ready');
  });
  pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
    console.log('https ready');
  });
  pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
    console.log('admin ready');
  });
}
export const policies = ['example']; // this is for CLI to automatically add to "policies" whitelist in gateway.config
export const options = {  // This is for CLI to ask about params 'eg plugin configure example'
  gatewayId: {
    title: 'Gateway Identifier',
    description: 'Identifier to uniquely identify a specific gateway',
    type: 'string',
    required: true
  },
  egmHost: {
    title: 'EGM Host',
    description: 'Express Gateway Manager Host',
    type: 'string',
    required: true
  },
  apiKey: {
    title: 'API Key',
    description: 'api key to connect with EGM instance',
    type: 'string',
    required: false
  }
};