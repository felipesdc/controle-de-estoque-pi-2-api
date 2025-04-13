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
router.get("/usuario/:usuario_id", authenticateToken, getUsuario); // Consultar usuário por ID
router.post("/usuario/login", authenticateUsuario); // Autentica Usuário por JWT
router.post("/usuario", authenticateToken, createNewUsuario); // Criar novo usuário
router.put("/usuario/:usuario_id", authenticateToken, updateExistingUsuario); // Atualizar usuário por ID
router.delete("/usuario/:usuario_id", authenticateToken, deleteExistingUsuario); // Deletar usuário por ID

export default router;
