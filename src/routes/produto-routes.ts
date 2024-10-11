import { Router } from "express";
import { getProduto, getProdutos } from "../controllers/produto-controller";

const router = Router();

router.get("/produto", getProdutos); // Consultar todos os produtos
router.get("/produto/:produto_id", getProduto); // Consultar produto por ID

export default router;
