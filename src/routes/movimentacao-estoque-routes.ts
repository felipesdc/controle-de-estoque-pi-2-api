import { Router } from "express";
import {
  createNewMovimentacaoEstoque,
  deleteExistingMovimentacaoEstoque,
  getMovimentacaoEstoque,
  getMovimentacoesEstoque,
  updateExistingMovimentacaoEstoque,
} from "../controllers/movimentacao-estoque-controller";

const router = Router();

router.get("/movimento", getMovimentacoesEstoque); // Consultar todas as movimentações de estoque
router.get("/movimento/:movimento_id", getMovimentacaoEstoque); // Consultar movimentação de estoque por ID
router.post("/movimento", createNewMovimentacaoEstoque); // Criar nova movimentação de estoque
router.put("/movimento/:movimento_id", updateExistingMovimentacaoEstoque); // Atualizar movimentação de estoque por ID
router.delete("/movimento/:movimento_id", deleteExistingMovimentacaoEstoque); // Deletar movimentação de estoque por ID

export default router;
