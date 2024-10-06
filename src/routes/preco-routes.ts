import { Router } from "express";
import {
  getPrecos,
  getPreco,
  createNewPreco,
  updateExistingPreco,
  deleteExistingPreco,
} from "../controllers/preco-controller";

const router = Router();

router.get("/preco", getPrecos); // Consultar todos os preços
router.get("/preco/:preco_id", getPreco); // Consultar preço por ID
router.post("/preco", createNewPreco); // Criar novo preço
router.put("/preco/:preco_id", updateExistingPreco); // Atualizar preço por ID
router.delete("/preco/:preco_id", deleteExistingPreco); // Deletar preço por ID

export default router;
