"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDefinition = {
    info: {
        title: 'Challenge Backend Andres Murgo',
        version: '1.0.0',
        description: 'Api que expone 2 endpoit de usuarios, uno para crear y el otro para traer todos los user en la base, ademas expone 2 endpoint mas que trae info de apis publicas .',
    },
    openapi: '3.0.1',
    servers: [
        {
            url: '/movistar-dao-nba/v1',
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ['swagger/docs/**/specification.yaml'],
};
const swaggerSpec = swagger_jsdoc_1.default(options);
exports.default = (path, app) => app.use(path, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
