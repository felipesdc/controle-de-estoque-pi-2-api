import { Router } from "express";
import {
  getEstadosPedido,
  getEstadoPedido,
  createNewEstadoPedido,
  updateExistingEstadoPedido,
  deleteExistingEstadoPedido,
} from "../controllers/estado-pedido-controller";

const router = Router();

router.get("/estado-pedido", getEstadosPedido); // Consultar todos os estados de pedido
router.get("/estado-pedido/:estado_id", getEstadoPedido); // Consultar estado de pedido por ID
router.post("/estado-pedido", createNewEstadoPedido); // Criar novo estado de pedido
router.put("/estado-pedido/:estado_id", updateExistingEstadoPedido); // Atualizar estado de pedido por ID
router.delete("/estado-pedido/:estado_id", deleteExistingEstadoPedido); // Deletar estado de pedido por ID

export default router;
