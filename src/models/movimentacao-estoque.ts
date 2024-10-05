import pool from "../config/db";

export type MovimentacaoEstoque = {
  movimento_id: number;
  movimento_produto_id: number;
  movimento_quantidade: number;
  movimento_tipo: string;
  movimento_data: Date;
  movimento_observacao: string;
};

export const getAllMovimentacoesEstoque = async (): Promise<
  MovimentacaoEstoque[]
> => {
  const res = await pool.query("SELECT * FROM pi2_movimentos_estoque");
  return res.rows;
};

export const getMovimentacaoEstoqueById = async (
  movimento_id: number
): Promise<MovimentacaoEstoque> => {
  const res = await pool.query(
    "SELECT * FROM pi2_movimentos_estoque WHERE movimento_id = $1",
    [movimento_id]
  );
  return res.rows[0];
};
