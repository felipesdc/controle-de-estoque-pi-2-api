import { Router } from "express";
import {
  createNewProduto,
  deleteExistingProduto,
  getProduto,
  getProdutos,
  updateExistingProduto,
} from "../controllers/produto-controller";
import { authenticateToken } from "../middlewares/auth";

const router = Router();

router.get("/produto", authenticateToken, getProdutos); // Consultar todos os produtos
router.get("/produto/:produto_id", authenticateToken, getProduto); // Consultar produto por ID
router.post("/produto", authenticateToken, createNewProduto); // Criar novo produto
router.put("/produto/:produto_id", authenticateToken, updateExistingProduto); // Atualizar produto por ID
router.delete("/produto/:produto_id", authenticateToken, deleteExistingProduto); // Deletar produto por ID

export default router;
