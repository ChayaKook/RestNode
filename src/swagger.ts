import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {Application} from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My Business",
            version: "1.0.0",
            description: "A server side for little business",
        },
        tags: [
            {
                name: "Business",
            },
            {
                name: "User",
            },
            {
                name: "Auth",
                // description: "Create users",
            },
            {
                name: "Service",
            },
        ],
        components: {
            securitySchemes: {  
                bearerAuth: {  
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }  
            },
            security: [{
                bearerAuth: [] // אוטומטית יישלח עם כל הבקשות שמוגדרות כמאובטחות
            }],
            schemas: {
                User: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            example: "JohnDoe"
                        },
                        password: {
                            type: "string",
                            example: "password123"
                        }
                    },
                    required: ["name", "password"]
                },
                Business: {
                    type: "object",
                    properties: {
                        userId: {
                            type: "string",
                            example: "user123"
                        },
                        businessData: {
                            type: Object,
                            example: { name: "ron-store"}
                        }
                    },
                    required: ["userId"]
                },
                Service: {
                    type: "object",
                    properties: {
                        businesId: {
                            type: "string",
                            example: "business123"
                        },
                        name:{
                            type: "string",
                            example: "name of service"
                        },
                        serviceData: {
                            type: Object,
                            example: { cost: "350"}
                        }
                    },
                    required: ["businesId", "name"]
                },
                
            }
        }
    },
    apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Application) => {
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
