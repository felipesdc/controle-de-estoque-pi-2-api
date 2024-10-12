/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Rotas relacionadas aos pedidos
 */

/**
 * @swagger
 * /pedido:
 *   get:
 *     summary: Retorna todos os pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pedido'
 */

/**
 * @swagger
 * /pedido/{pedido_id}:
 *   get:
 *     summary: Retorna um pedido específico pelo ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: pedido_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Pedido não encontrado
 */

/**
 * @swagger
 * /pedido:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Pedido'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 */

/**
 * @swagger
 * /pedido/{pedido_id}:
 *   put:
 *     summary: Atualiza um pedido existente
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: pedido_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Pedido não encontrado
 */

/**
 * @swagger
 * /pedido/{pedido_id}:
 *   delete:
 *     summary: Deleta um pedido existente
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: pedido_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       204:
 *         description: Pedido deletado com sucesso
 *       404:
 *         description: Pedido não encontrado
 */

import { Router } from "express";
import {
  getPedidos,
  getPedido,
  createNewPedido,
  updateExistingPedido,
  deleteExistingPedido,
} from "../controllers/pedido-controller";

const router = Router();

router.get("/pedido", getPedidos); // Consultar todos os pedidos
router.get("/pedido/:pedido_id", getPedido); // Consultar pedido por ID
router.post("/pedido", createNewPedido); // Criar novo pedido
router.put("/pedido/:pedido_id", updateExistingPedido); // Atualizar pedido por ID
router.delete("/pedido/:pedido_id", deleteExistingPedido); // Deletar pedido por ID

export default router;
