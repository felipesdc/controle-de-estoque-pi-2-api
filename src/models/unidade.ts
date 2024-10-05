import pool from "../config/db";

export type Unidade = {
  unidade_id: number;
  unidade_descricao: string;
};

export const getAllUnidades = async (): Promise<Unidade[]> => {
  const res = await pool.query("SELECT * FROM pi2_unidades");
  return res.rows;
};

export const getUnidadeById = async (unidade_id: number): Promise<Unidade> => {
  const res = await pool.query(
    "SELECT * FROM pi2_unidades WHERE unidade_id = $1",
    [unidade_id]
  );
  return res.rows[0];
};
