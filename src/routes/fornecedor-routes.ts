import { Router } from "express";
import {
  createNewFornecedor,
  deleteExistingFornecedor,
  getFornecedor,
  getFornecedores,
  updateExistingFornecedor,
} from "../controllers/fornecedor-controller";

const router = Router();

router.get("/fornecedor", getFornecedores); // Consultar todos as fornecedores
router.get("/fornecedor/:fornecedor_id", getFornecedor); // Consultar fornecedor por ID
router.post("/fornecedor", createNewFornecedor); // Criar novo fornecedor
router.put("/fornecedor/:fornecedor_id", updateExistingFornecedor); // Atualizar fornecedor por ID
router.delete("/fornecedor/:fornecedor_id", deleteExistingFornecedor); // Deletar fornecedor por ID

export default router;
