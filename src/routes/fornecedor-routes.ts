import { Router } from "express";
import {
  getFornecedor,
  getFornecedores,
} from "../controllers/fornecedor-controller";

const router = Router();

router.get("/fornecedor", getFornecedores);
router.get("/fornecedor/:id", getFornecedor);

export default router;
