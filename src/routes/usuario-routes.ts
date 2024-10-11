import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  createNewUsuario,
  updateExistingUsuario,
  deleteExistingUsuario,
} from "../controllers/usuario-controller";

const router = Router();

router.get("/usuario", getUsuarios); // Consultar todos os usuários
router.get("/usuario/:usuario_id", getUsuario); // Consultar usuário por ID
router.post("/usuario", createNewUsuario); // Criar novo usuário
router.put("/usuario/:usuario_id", updateExistingUsuario); // Atualizar usuário por ID
router.delete("/usuario/:usuario_id", deleteExistingUsuario); // Deletar usuário por ID

export default router;
