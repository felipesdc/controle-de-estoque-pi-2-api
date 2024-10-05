import { Router } from "express";
import {
  getCategorias,
  getCategoria,
} from "../controllers/categoria-controller";

const router = Router();

router.get("/categoria", getCategorias);
router.get("/categoria/:id", getCategoria);

export default router;
