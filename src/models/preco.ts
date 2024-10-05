import pool from "../config/db";

export type Preco = {
  preco_id: number;
  preco_compra: string;
  preco_venda: string;
  preco_data_inicial: string;
  preco_data_final: string;
};

export const getAllPrecos = async (): Promise<Preco[]> => {
  const res = await pool.query("SELECT * FROM pi2_precos");
  return res.rows;
};

export const getPrecoById = async (preco_id: number): Promise<Preco> => {
  const res = await pool.query("SELECT * FROM pi2_precos WHERE preco_id = $1", [
    preco_id,
  ]);
  return res.rows[0];
};
