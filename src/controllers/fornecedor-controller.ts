import { Request, Response } from "express";
import {
  createFornecedor,
  deleteFornecedor,
  getAllFornecedores,
  getFornecedorById,
  updateFornecedor,
} from "../models/fornecedor";

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
    const fornecedor = await getFornecedorById(
      Number(req.params.fornecedor_id)
    );
    if (fornecedor) {
      res.json(fornecedor);
    } else {
      res.status(404).json({ message: "Fornecedor não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar fornecedor" });
  }
};

// Criar novo fornecedor
export const createNewFornecedor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { fornecedor_nome, fornecedor_contato, fornecedor_endereco } =
      req.body;
    const newPreco = await createFornecedor(
      fornecedor_nome,
      fornecedor_contato,
      fornecedor_endereco
    );
    res.status(201).json(newPreco);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar preço" });
  }
};

// Atualizar um fornecedor
export const updateExistingFornecedor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fornecedor_id = Number(req.params.fornecedor_id);
    const { fornecedor_nome, fornecedor_contato, fornecedor_endereco } =
      req.body;
    const updatedFornecedor = await updateFornecedor(
      fornecedor_id,
      fornecedor_nome,
      fornecedor_contato,
      fornecedor_endereco
    );
    if (updatedFornecedor) {
      res.json(updatedFornecedor);
    } else {
      res.status(404).json({ message: "Fornecedor não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar fornecedor" });
  }
};

// Deletar um fornecedor
export const deleteExistingFornecedor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fornecedor_id = Number(req.params.fornecedor_id);
    await deleteFornecedor(fornecedor_id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar fornecedor" });
  }
};
