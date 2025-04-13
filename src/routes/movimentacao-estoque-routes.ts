import { Router } from "express";
import {
  createNewMovimentacaoEstoque,
  deleteExistingMovimentacaoEstoque,
  getMovimentacaoEstoque,
  getMovimentacoesEstoque,
  updateExistingMovimentacaoEstoque,
} from "../controllers/movimentacao-estoque-controller";
import { authenticateToken } from "../middlewares/auth";

const router = Router();

router.get("/movimentacao-estoque", authenticateToken, getMovimentacoesEstoque); // Consultar todas as movimentações de estoque
router.get(
  "/movimentacao-estoque/:movimento_id",
  authenticateToken,
  getMovimentacaoEstoque
); // Consultar movimentação de estoque por ID
router.post(
  "/movimentacao-estoque",
  authenticateToken,
  createNewMovimentacaoEstoque
); // Criar nova movimentação de estoque
router.put(
  "/movimentacao-estoque/:movimento_id",
  authenticateToken,
  updateExistingMovimentacaoEstoque
); // Atualizar movimentação de estoque por ID
router.delete(
  "/movimentacao-estoque/:movimento_id",
  authenticateToken,
  deleteExistingMovimentacaoEstoque
); // Deletar movimentação de estoque por ID

export default router;
