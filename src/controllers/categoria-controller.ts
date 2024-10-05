import { Request, Response } from "express";
import { getAllCategorias, getCategoriaById } from "../models/categoria";

export const getCategorias = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categorias = await getAllCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar categorias" });
  }
};

export const getCategoria = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categoria = await getCategoriaById(Number(req.params.id));
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar categoria" });
  }
};
