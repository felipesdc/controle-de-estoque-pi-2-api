import pool from "../config/db";

export type MovimentacaoEstoque = {
  movimento_id: number;
  movimento_produto_id: number;
  movimento_quantidade: number;
  movimento_tipo: string;
  movimento_data: Date;
  movimento_observacao: string;
};

// Consultar todas as movimentações de estoque
export const getAllMovimentacoesEstoque = async (): Promise<
  MovimentacaoEstoque[]
> => {
  const res = await pool.query("SELECT * FROM pi2_movimentos_estoque");
  return res.rows;
};

// Consultar uma movimentação de estoque específica
export const getMovimentacaoEstoqueById = async (
  movimento_id: number
): Promise<MovimentacaoEstoque> => {
  const res = await pool.query(
    "SELECT * FROM pi2_movimentos_estoque WHERE movimento_id = $1",
    [movimento_id]
  );
  return res.rows[0];
};

// Criar nova movimentação de estoque
export const createMovimentacaoEstoque = async (
  movimento_produto_id: number,
  movimento_quantidade: number,
  movimento_tipo: string,
  movimento_data: Date,
  movimento_observacao: string
): Promise<MovimentacaoEstoque> => {
  const res = await pool.query(
    "INSERT INTO pi2_movimentos_estoque (movimento_produto_id, movimento_quantidade, movimento_tipo, movimento_data, movimento_observacao) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      movimento_produto_id,
      movimento_quantidade,
      movimento_tipo,
      movimento_data,
      movimento_observacao,
    ]
  );
  return res.rows[0];
};

// Atualizar uma movimentação de estoque específica
export const updateMovimentacaoEstoque = async (
  movimento_id: number,
  movimento_produto_id: number,
  movimento_quantidade: number,
  movimento_tipo: string,
  movimento_data: Date,
  movimento_observacao: string
): Promise<MovimentacaoEstoque | null> => {
  const res = await pool.query(
    "UPDATE pi2_movimentos_estoque SET movimento_produto_id = $2, movimento_quantidade = $3, movimento_tipo = $4, movimento_data = $5, movimento_observacao = $6 WHERE movimento_id = $1 RETURNING *",
    [
      movimento_id,
      movimento_produto_id,
      movimento_quantidade,
      movimento_tipo,
      movimento_data,
      movimento_observacao,
    ]
  );
  return res.rows.length ? res.rows[0] : null;
};

// Deletar uma movimentação de estoque
export const deleteMovimentacaoEstoque = async (
  movimento_id: number
): Promise<void> => {
  await pool.query(
    "DELETE FROM pi2_movimentos_estoque WHERE movimento_id = $1",
    [movimento_id]
  );
};
