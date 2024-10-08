import { Request, Response } from "express";
import { getAllProdutos, getProdutoById } from "../models/produto";

export const getProdutos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const produtos = await getAllProdutos();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
};

export const getProduto = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const produto = await getProdutoById(Number(req.params.id));
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produto" });
  }
};
