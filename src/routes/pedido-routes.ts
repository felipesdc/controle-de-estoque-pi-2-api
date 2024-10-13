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
