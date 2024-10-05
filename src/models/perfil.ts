import pool from "../config/db";

export type Perfil = {
  perfil_id: number;
  perfil_nome: string;
};

export const getAllPerfis = async (): Promise<Perfil[]> => {
  const res = await pool.query("SELECT * FROM pi2_perfis");
  return res.rows;
};

export const getPerfilById = async (perfil_id: number): Promise<Perfil> => {
  const res = await pool.query(
    "SELECT * FROM pi2_perfis WHERE perfil_id = $1",
    [perfil_id]
  );
  return res.rows[0];
};
