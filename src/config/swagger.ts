import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import pedidoSchema from "../schemas/pedido-schema";

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
  apis: ["./src/routes/*.ts"], // Caminho para os arquivos de rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
