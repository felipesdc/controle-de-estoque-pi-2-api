import { Router } from "express";
import {
  getMovimentacaoEstoque,
  getMovimentacoesEstoque,
} from "../controllers/movimentacao-estoque-controller";

const router = Router();

router.get("/movimento", getMovimentacoesEstoque);
router.get("/movimento/:id", getMovimentacaoEstoque);

export default router;
