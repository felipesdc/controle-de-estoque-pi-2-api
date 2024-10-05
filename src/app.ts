import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

import perfilRoutes from "./routes/perfil-routes";
import usuarioRoutes from "./routes/usuario-routes";
import precoRoutes from "./routes/preco-routes";
import fornecedorRoutes from "./routes/preco-routes";
import categoriaRoutes from "./routes/categoria-routes";
import unidadeRoutes from "./routes/unidade-routes";
import produtoRoutes from "./routes/produto-routes";
import movimentacaoEstoqueRoutes from "./routes/movimentacao-estoque-routes";

const app = express();

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

// Middlewares
app.use(express.json());
app.use(express.static("public"), cors());
app.use(urlencodedParser);
app.use(bodyParser.json({ limit: "15mb" }));

// Rotas
app.use("/api", perfilRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", precoRoutes);
app.use("/api", fornecedorRoutes);
app.use("/api", categoriaRoutes);
app.use("/api", unidadeRoutes);
app.use("/api", produtoRoutes);
app.use("/api", movimentacaoEstoqueRoutes);

// Rota raiz com template
app.get("/", (req, res) => {
  res.render("index", { title: "Bem-vindo à API do Controle de Estoque" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
