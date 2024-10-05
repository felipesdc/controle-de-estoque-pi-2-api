import { Request, Response } from "express";
import { getAllPrecos, getPrecoById } from "../models/preco";

export const getPrecos = async (req: Request, res: Response): Promise<void> => {
  try {
    const precos = await getAllPrecos();
    res.json(precos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar preços" });
  }
};

export const getPreco = async (req: Request, res: Response): Promise<void> => {
  try {
    const preco = await getPrecoById(Number(req.params.id));
    if (preco) {
      res.json(preco);
    } else {
      res.status(404).json({ message: "Preço não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar preço" });
  }
};
