import { Router } from "express";
import { getUsuarios, getUsuario } from "../controllers/usuario-controller";

const router = Router();

router.get("/usuario", getUsuarios);
router.get("/usuario/:id", getUsuario);

export default router;
