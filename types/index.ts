import { SystemConfig, EGMSettings } from './system';
import { GatewayConfig } from './gateway';

export interface EGConfig {
    systemConfig: SystemConfig;
    gatewayConfig: GatewayConfig;
}

export interface RouteContext {
    settings: EGMSettings;
    config: EGConfig
}

export * from './gateway';
export * from './system';