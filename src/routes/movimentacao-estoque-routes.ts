import { Router } from "express";
import {
  getMovimentacaoEstoque,
  getMovimentacoesEstoque,
} from "../controllers/movimentacao-estoque-controller";

const router = Router();

router.get("/movimento", getMovimentacoesEstoque); // Consultar todas as movimentações de estoque
router.get("/movimento/:movimento_id", getMovimentacaoEstoque); // Consultar movimentação de estoque por ID

export default router;
