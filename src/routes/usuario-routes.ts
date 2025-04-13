import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  createNewUsuario,
  updateExistingUsuario,
  deleteExistingUsuario,
  authenticateUsuario,
} from "../controllers/usuario-controller";
import { authenticateToken } from "../middlewares/auth";

const router = Router();

router.get("/usuario", authenticateToken, getUsuarios); // Consultar todos os usuários
router.get("/usuario/:usuario_id", getUsuario); // Consultar usuário por ID
router.post("/usuario/login", authenticateUsuario); // Autentica Usuário por JWT
router.post("/usuario", createNewUsuario); // Criar novo usuário
router.put("/usuario/:usuario_id", updateExistingUsuario); // Atualizar usuário por ID
router.delete("/usuario/:usuario_id", deleteExistingUsuario); // Deletar usuário por ID

export default router;
