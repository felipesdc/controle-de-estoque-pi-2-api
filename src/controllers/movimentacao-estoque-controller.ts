import { Request, Response } from "express";
import {
  getAllMovimentacoesEstoque,
  getMovimentacaoEstoqueById,
} from "../models/movimentacao-estoque";

export const getMovimentacoesEstoque = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movimentos = await getAllMovimentacoesEstoque();
    res.json(movimentos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar movimentações" });
  }
};

export const getMovimentacaoEstoque = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movimento = await getMovimentacaoEstoqueById(Number(req.params.id));
    if (movimento) {
      res.json(movimento);
    } else {
      res.status(404).json({ message: "Movimentação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar movimentação" });
  }
};
