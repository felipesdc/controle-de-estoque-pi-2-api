import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  userId?: number;
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Token não fornecido" });
    return;
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "secreto",
    (err, decoded: any) => {
      if (err) {
        res.status(403).json({ message: "Token inválido ou expirado" });
        return;
      }
      req.userId = decoded.id;
      next(); // segue para a rota protegida
    }
  );
};
