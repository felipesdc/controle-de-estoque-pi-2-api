import { Request, Response } from "express";
import { getAllUsuarios, getUsuarioById } from "../models/usuario";

export const getUsuarios = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuarios = await getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
};

export const getUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuario = await getUsuarioById(Number(req.params.id));
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário" });
  }
};
