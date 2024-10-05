import pool from "../config/db";

export type Categoria = {
  categoria_id: number;
  categoria_descricao: string;
};

export const getAllCategorias = async (): Promise<Categoria[]> => {
  const res = await pool.query("SELECT * FROM pi2_categorias");
  return res.rows;
};

export const getCategoriaById = async (
  categoria_id: number
): Promise<Categoria> => {
  const res = await pool.query(
    "SELECT * FROM pi2_categorias WHERE categoria_id = $1",
    [categoria_id]
  );
  return res.rows[0];
};
