import 'express-gateway';
import * as Manifest from './manifest';
//TODO: try to remove the following line when default export issue is fixed in express gateway
const check:ExpressGateway.Plugin = Manifest;
export * from './manifest';