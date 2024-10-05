import { Router } from "express";
import { getPerfis, getPerfil } from "../controllers/perfil-controller";

const router = Router();

router.get("/perfil", getPerfis);
router.get("/perfil/:id", getPerfil);

export default router;
