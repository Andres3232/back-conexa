import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
    info: {
        title: 'Challenge Backend Andres Murgo',
        version: '1.0.0',
        description:
            'Api que expone 2 endpoit de usuarios, uno para crear y el otro para traer todos los user en la base, ademas expone 2 endpoint mas que trae info de apis publicas .',
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
const swaggerSpec = swaggerJSDoc(options);

export default (path: any, app: any) => app.use(path, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
