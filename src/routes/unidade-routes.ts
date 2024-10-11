import { Router } from "express";
import { getUnidade, getUnidades } from "../controllers/unidade-controller";

const router = Router();

router.get("/unidade", getUnidades); // Consultar todas as unidades
router.get("/unidade/:unidade_id", getUnidade); // Consultar unidade por ID

export default router;
