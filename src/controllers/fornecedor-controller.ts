import { Request, Response } from "express";
import { getAllFornecedores, getFornecedorById } from "../models/fornecedor";

export const getFornecedores = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fornecedores = await getAllFornecedores();
    res.json(fornecedores);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar fornecedores" });
  }
};

export const getFornecedor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fornecedor = await getFornecedorById(Number(req.params.id));
    if (fornecedor) {
      res.json(fornecedor);
    } else {
      res.status(404).json({ message: "Fornecedor não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar fornecedor" });
  }
};
