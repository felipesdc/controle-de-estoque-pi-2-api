import { Request, Response } from "express";
import {
  createUsuario,
  deleteUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
} from "../models/usuario";

// Consultar todos os usuários
export const getUsuarios = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuarios = await getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
};

// Consultar um usuário específico
export const getUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuario = await getUsuarioById(Number(req.params.usuario_id));
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário" });
  }
};

// Criar novo usuário
export const createNewUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      usuario_nome,
      usuario_email,
      usuario_password,
      usuario_nome_completo,
      usuario_inscricao,
      usuario_perfil_id,
      usuario_status,
    } = req.body;
    const newUsuario = await createUsuario(
      usuario_nome,
      usuario_email,
      usuario_password,
      usuario_nome_completo,
      usuario_inscricao,
      usuario_perfil_id,
      usuario_status
    );
    res.status(201).json(newUsuario);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};

// Atualizar um usuário específico
export const updateExistingUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuario_id = Number(req.params.usuario_id);
    const {
      usuario_nome,
      usuario_email,
      usuario_password,
      usuario_nome_completo,
      usuario_inscricao,
      usuario_perfil_id,
      usuario_status,
    } = req.body;
    const updatedUsuario = await updateUsuario(
      usuario_id,
      usuario_nome,
      usuario_email,
      usuario_password,
      usuario_nome_completo,
      usuario_inscricao,
      usuario_perfil_id,
      usuario_status
    );
    if (updatedUsuario) {
      res.json(updatedUsuario);
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário" });
  }
};

// Deletar um usuário específico
export const deleteExistingUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuario_id = Number(req.params.usuario_id);
    await deleteUsuario(usuario_id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário" });
  }
};
