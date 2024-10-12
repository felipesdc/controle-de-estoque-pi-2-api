import { Router } from "express";
import {
  createNewProduto,
  deleteExistingProduto,
  getProduto,
  getProdutos,
  updateExistingProduto,
} from "../controllers/produto-controller";

const router = Router();

router.get("/produto", getProdutos); // Consultar todos os produtos
router.get("/produto/:produto_id", getProduto); // Consultar produto por ID
router.post("/produto", createNewProduto); // Criar novo produto
router.put("/produto/:produto_id", updateExistingProduto); // Atualizar produto por ID
router.delete("/produto/:produto_id", deleteExistingProduto); // Deletar produto por ID

export default router;
