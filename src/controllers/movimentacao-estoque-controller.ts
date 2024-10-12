import { Request, Response } from "express";
import {
  createMovimentacaoEstoque,
  deleteMovimentacaoEstoque,
  getAllMovimentacoesEstoque,
  getMovimentacaoEstoqueById,
  updateMovimentacaoEstoque,
} from "../models/movimentacao-estoque";

// Consultar todas as movimentações de estoque
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

// Consultar uma movimentação de estoque específica
export const getMovimentacaoEstoque = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movimento = await getMovimentacaoEstoqueById(
      Number(req.params.movimento_id)
    );
    if (movimento) {
      res.json(movimento);
    } else {
      res.status(404).json({ message: "Movimentação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar movimentação" });
  }
};

// Criar nova movimentação de estoque
export const createNewMovimentacaoEstoque = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      movimento_produto_id,
      movimento_quantidade,
      movimento_tipo,
      movimento_data,
      movimento_observacao,
    } = req.body;
    const newMovimentacaoEstoque = await createMovimentacaoEstoque(
      movimento_produto_id,
      movimento_quantidade,
      movimento_tipo,
      movimento_data,
      movimento_observacao
    );
    res.status(201).json(newMovimentacaoEstoque);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar movimentação" });
  }
};

// Atualizar uma movimentação de estoque específica
export const updateExistingMovimentacaoEstoque = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movimento_id = Number(req.params.movimento_id);
    const {
      movimento_produto_id,
      movimento_quantidade,
      movimento_tipo,
      movimento_data,
      movimento_observacao,
    } = req.body;
    const updatedMovimentacaoEstoque = await updateMovimentacaoEstoque(
      movimento_id,
      movimento_produto_id,
      movimento_quantidade,
      movimento_tipo,
      movimento_data,
      movimento_observacao
    );
    if (updatedMovimentacaoEstoque) {
      res.json(updatedMovimentacaoEstoque);
    } else {
      res.status(404).json({ message: "Movimentação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar movimentação" });
  }
};

// Deletar uma movimentação de estoque específica
export const deleteExistingMovimentacaoEstoque = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movimento_id = Number(req.params.movimento_id);
    await deleteMovimentacaoEstoque(movimento_id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar movimentação" });
  }
};
