import pool from "../config/db";

export type Fornecedor = {
  fornecedor_id: number;
  fornecedor_nome: string;
  fornecedor_contato: string;
  fornecedor_endereco: string;
};

export const getAllFornecedores = async (): Promise<Fornecedor[]> => {
  const res = await pool.query("SELECT * FROM pi2_fornecedores");
  return res.rows;
};

export const getFornecedorById = async (
  fornecedor_id: number
): Promise<Fornecedor> => {
  const res = await pool.query(
    "SELECT * FROM pi2_fornecedores WHERE fornecedor_id = $1",
    [fornecedor_id]
  );
  return res.rows[0];
};
