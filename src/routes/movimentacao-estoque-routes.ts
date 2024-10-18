import { Router } from "express";
import {
  createNewMovimentacaoEstoque,
  deleteExistingMovimentacaoEstoque,
  getMovimentacaoEstoque,
  getMovimentacoesEstoque,
  updateExistingMovimentacaoEstoque,
} from "../controllers/movimentacao-estoque-controller";

const router = Router();

router.get("/movimentacao-estoque", getMovimentacoesEstoque); // Consultar todas as movimentações de estoque
router.get("/movimentacao-estoque/:movimento_id", getMovimentacaoEstoque); // Consultar movimentação de estoque por ID
router.post("/movimentacao-estoque", createNewMovimentacaoEstoque); // Criar nova movimentação de estoque
router.put(
  "/movimentacao-estoque/:movimento_id",
  updateExistingMovimentacaoEstoque
); // Atualizar movimentação de estoque por ID
router.delete(
  "/movimentacao-estoque/:movimento_id",
  deleteExistingMovimentacaoEstoque
); // Deletar movimentação de estoque por ID

export default router;
