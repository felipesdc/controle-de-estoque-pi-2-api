/**
 * @swagger
 * components:
 *   schemas:
 *     Pedido:
 *       type: object
 *       required:
 *         - pedido_fornecedor_id
 *         - pedido_data
 *         - pedido_usuario_id
 *         - pedido_estado_id
 *         - pedido_observacao
 *         - pedido_total
 *       properties:
 *         pedido_id:
 *           type: integer
 *           description: ID do pedido
 *         pedido_fornecedor_id:
 *           type: integer
 *           description: ID do fornecedor associado ao pedido
 *         pedido_data:
 *           type: string
 *           format: date-time
 *           description: Data do pedido
 *         pedido_usuario_id:
 *           type: integer
 *           description: ID do usuário que fez o pedido
 *         pedido_estado_id:
 *           type: integer
 *           description: ID do estado atual do pedido (Ex.: pendente, entregue)
 *         pedido_observacao:
 *           type: string
 *           description: Observações adicionais sobre o pedido
 *         pedido_total:
 *           type: number
 *           description: Valor total do pedido
 *       example:
 *         pedido_id: 1
 *         pedido_fornecedor_id: 2
 *         pedido_data: "2024-10-10T10:30:00.000Z"
 *         pedido_usuario_id: 4
 *         pedido_estado_id: 1
 *         pedido_observacao: "Entregar no portão A"
 *         pedido_total: 150.0
 */

import { Schema } from "swagger-schema-official";

const pedidoSchema: Schema = {
  type: "object",
  properties: {
    pedido_id: { type: "integer" },
    pedido_fornecedor_id: { type: "integer" },
    pedido_data: { type: "string", format: "date-time" },
    pedido_usuario_id: { type: "integer" },
    pedido_estado_id: { type: "integer" },
    pedido_observacao: { type: "string" },
    pedido_total: { type: "integer" },
  },
  required: [
    "pedido_fornecedor_id",
    "pedido_data",
    "pedido_usuario_id",
    "pedido_estado_id",
    "pedido_observacao",
    "pedido_total",
  ],
};

export default pedidoSchema;
