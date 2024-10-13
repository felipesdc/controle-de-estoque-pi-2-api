import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import pedidoSchema from "../schemas/pedido-schema";

const env = process.env.NODE_ENV || "development";

// CDN CSS
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API do Sistema de Gestão de Estoques",
      version: "1.0.0",
      description:
        "Documentação da API de Gestão de Estoques para uma hamburgueria",
    },
    servers: [
      {
        url: "https://controle-de-estoque-pi-2-api.vercel.app/v1",
      },
    ],
    components: {
      schemas: {
        Pedido: pedidoSchema,
      },
    },
  },
  apis: env === "production" ? ["./dist/**/*.js"] : ["./src/**/*.ts"], // Diferentes caminhos para produção e desenvolvimento
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, {
      customCss:
        ".swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }",
      customCssUrl: CSS_URL,
    })
  );
};
