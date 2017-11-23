

export interface Http {
    port: number;
}

export interface Tls {
}

export interface Https {
    port: number;
    tls: Tls;
}

export interface Admin {
    port: number;
    hostname: string;
}

export interface Api {
    host: string;
}

export interface ApiEndpoints {
    api: Api;
}

export interface Backend {
    url: string;
}

export interface ServiceEndpoints {
    backend: Backend;
}

export interface Action {
    serviceEndpoint: string;
}

export interface Proxy {
    action: Action;
}

export interface Policy {
    proxy: Proxy[];
}

export interface AdminAPI {
    apiEndpoints: string[];
    policies: Policy[];
}

export interface Pipelines {
    adminAPI: AdminAPI;
}

export interface GatewayConfig {
    http: Http;
    https: Https;
    admin: Admin;
    apiEndpoints: ApiEndpoints;
    serviceEndpoints: ServiceEndpoints;
    policies: string[];
    pipelines: Pipelines;
}