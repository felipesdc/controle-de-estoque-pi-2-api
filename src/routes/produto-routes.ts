import { Router } from "express";
import { getProduto, getProdutos } from "../controllers/produto-controller";

const router = Router();

router.get("/produto", getProdutos);
router.get("/produto/:id", getProduto);

export default router;
