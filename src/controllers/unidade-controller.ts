import { Request, Response } from "express";
import { getAllUnidades, getUnidadeById } from "../models/unidade";

export const getUnidades = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const unidades = await getAllUnidades();
    res.json(unidades);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar unidades" });
  }
};

export const getUnidade = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const unidade = await getUnidadeById(Number(req.params.unidade_id));
    if (unidade) {
      res.json(unidade);
    } else {
      res.status(404).json({ message: "Unidade não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar unidade" });
  }
};
