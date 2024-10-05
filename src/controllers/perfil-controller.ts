import { Request, Response } from "express";
import { getAllPerfis, getPerfilById } from "../models/perfil";

export const getPerfis = async (req: Request, res: Response): Promise<void> => {
  try {
    const perfis = await getAllPerfis();
    res.json(perfis);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar perfis" });
  }
};

export const getPerfil = async (req: Request, res: Response): Promise<void> => {
  try {
    const perfil = await getPerfilById(Number(req.params.id));
    if (perfil) {
      res.json(perfil);
    } else {
      res.status(404).json({ message: "Perfil não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar perfil" });
  }
};
