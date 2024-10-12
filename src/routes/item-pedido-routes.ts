import { Router } from "express";
import {
  getItensPedido,
  getItemPedido,
  createNewItemPedido,
  updateExistingItemPedido,
  deleteExistingItemPedido,
} from "../controllers/item-pedido-controller";

const router = Router();

router.get("/item-pedido", getItensPedido); // Consultar todos os itens de pedido
router.get("/item-pedido/:item_pedido_id", getItemPedido); // Consultar item de pedido por ID
router.post("/item-pedido", createNewItemPedido); // Criar novo item de pedido
router.put("/item-pedido/:item_pedido_id", updateExistingItemPedido); // Atualizar item de pedido por ID
router.delete("/item-pedido/:item_pedido_id", deleteExistingItemPedido); // Deletar item de pedido por ID

export default router;
