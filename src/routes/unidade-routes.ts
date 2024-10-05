import { Router } from "express";
import { getUnidade, getUnidades } from "../controllers/unidade-controller";

const router = Router();

router.get("/unidade", getUnidades);
router.get("/unidade/:id", getUnidade);

export default router;
