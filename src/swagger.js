import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Portafolio API",
            version: "1.0.0",
            description: "Api de portafolio para pruebas de envio"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec, swaggerUi };

