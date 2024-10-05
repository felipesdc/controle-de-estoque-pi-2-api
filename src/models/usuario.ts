import pool from "../config/db";

export type Usuario = {
  usuario_id: number;
  usuario_nome: string;
  usuario_email: string;
  usuario_password: string;
  usuario_nome_completo: string;
  usuario_inscricao: Date;
  usuario_perfil_id: number;
  usuario_status: boolean;
};

export const getAllUsuarios = async (): Promise<Usuario[]> => {
  const res = await pool.query("SELECT * FROM pi2_usuarios");
  return res.rows;
};

export const getUsuarioById = async (usuario_id: number): Promise<Usuario> => {
  const res = await pool.query(
    "SELECT * FROM pi2_usuarios WHERE usuario_id = $1",
    [usuario_id]
  );
  return res.rows[0];
};
