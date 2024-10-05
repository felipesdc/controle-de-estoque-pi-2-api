import pool from "../config/db";

export type Produto = {
  produto_id: number;
  produto_descricao: string;
  produto_fornecedor_id: number;
  produto_preco_id: number;
  produto_unidade_id: number;
  produto_categoria_id: number;
  produto_quantidade_estoque: number;
  produto_data_validade: Date;
  produto_codigo_barras: string;
  produto_estado: boolean;
};

export const getAllProdutos = async (): Promise<Produto[]> => {
  const res = await pool.query("SELECT * FROM pi2_produtos");
  return res.rows;
};

export const getProdutoById = async (produto_id: number): Promise<Produto> => {
  const res = await pool.query(
    "SELECT * FROM pi2_produtos WHERE produto_id = $1",
    [produto_id]
  );
  return res.rows[0];
};
