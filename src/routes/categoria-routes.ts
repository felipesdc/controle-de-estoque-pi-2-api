import { Router } from "express";
import {
  getCategorias,
  getCategoria,
  createNewCategoria,
  updateExistingCategoria,
  deleteExistingCategoria,
} from "../controllers/categoria-controller";

const router = Router();

router.get("/categoria", getCategorias); // Consultar todas as categorias
router.get("/categoria/:categoria_id", getCategoria); // Consultar categoria por ID
router.post("/categoria", createNewCategoria); // Criar nova categoria
router.put("/categoria/:categoria_id", updateExistingCategoria); // Atualizar categoria por ID
router.delete("/categoria/:categoria_id", deleteExistingCategoria); // Deletar categoria por ID

export default router;
