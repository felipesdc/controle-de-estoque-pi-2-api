import { Router } from "express";
import {
  getHistoricosEstadoPedido,
  getHistoricoEstadoPedido,
  createNewHistoricoEstadoPedido,
  updateExistingHistoricoEstadoPedido,
  deleteExistingHistoricoEstadoPedido,
} from "../controllers/historico-estado-pedido-controller";

const router = Router();

router.get("/historico-estado-pedido", getHistoricosEstadoPedido); // Consultar todos os históricos de estado de pedido
router.get("/historico-estado-pedido/:historico_id", getHistoricoEstadoPedido); // Consultar histórico de estado de pedido por ID
router.post("/historico-estado-pedido", createNewHistoricoEstadoPedido); // Criar novo histórico de estado de pedido
router.put(
  "/historico-estado-pedido/:historico_id",
  updateExistingHistoricoEstadoPedido
); // Atualizar histórico de estado de pedido por ID
router.delete(
  "/historico-estado-pedido/:historico_id",
  deleteExistingHistoricoEstadoPedido
); // Deletar histórico de estado de pedido por ID

export default router;
