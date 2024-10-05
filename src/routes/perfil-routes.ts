import { Router } from "express";
import {
  getPerfis,
  getPerfil,
  createNewPerfil,
  updateExistingPerfil,
  deleteExistingPerfil,
} from "../controllers/perfil-controller";

const router = Router();

router.get("/perfil", getPerfis); // Consultar todos os perfis
router.get("/perfil/:perfil_id", getPerfil); // Consultar perfil por ID
router.post("/perfil", createNewPerfil); // Criar novo perfil
router.put("/perfil/:perfil_id", updateExistingPerfil); // Atualizar perfil por ID
router.delete("/perfil/:perfil_id", deleteExistingPerfil); // Deletar perfil por ID

export default router;
