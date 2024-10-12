import { Router } from "express";
import {
  createNewUnidade,
  deleteExistingUnidade,
  getUnidade,
  getUnidades,
  updateExistingUnidade,
} from "../controllers/unidade-controller";

const router = Router();

router.get("/unidade", getUnidades); // Consultar todas as unidades
router.get("/unidade/:unidade_id", getUnidade); // Consultar unidade por ID
router.post("/unidade", createNewUnidade); // Criar nova unidade
router.put("/unidade/:unidade_id", updateExistingUnidade); // Atualizar unidade por ID
router.delete("/unidade/:unidade_id", deleteExistingUnidade); // Deletar unidade por ID

export default router;
