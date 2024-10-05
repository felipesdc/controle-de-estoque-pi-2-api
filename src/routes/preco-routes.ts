import { Router } from "express";
import { getPrecos, getPreco } from "../controllers/preco-controller";

const router = Router();

router.get("/preco", getPrecos);
router.get("/preco/:id", getPreco);

export default router;
