require("dotenv").config();

const express = require("express");
const app = express();

const { sql } = require("@vercel/postgres");

const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"), cors());
app.use(urlencodedParser);
app.use(bodyParser.json({ limit: "15mb" }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "components", "home.htm"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "components", "about.htm"));
});

app.get("/uploadProduto", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "components", "produto_upload_form.htm")
  );
});

app.post("/uploadSuccessful", urlencodedParser, async (req, res) => {
  try {
    await sql`INSERT INTO produtos (id, nome, preco) VALUES (${req.body.id}, ${req.body.nome}, ${req.body.preco});`;
    res.status(200).send("<h1>Produto added successfully</h1>");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding produto");
  }
});

app.get("/allProdutos", async (req, res) => {
  try {
    const produtos = await sql`SELECT * FROM produtos;`;
    if (produtos && produtos.rows.length > 0) {
      let tableContent = produtos.rows
        .map(
          (produto) =>
            `<tr>
                        <td>${produto.id}</td>
                        <td>${produto.nome}</td>
                        <td>${produto.preco}</td>
                    </tr>`
        )
        .join("");

      res.status(200).send(`
                <html>
                    <head>
                        <title>Produtos</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                            }
                            table {
                                width: 100%;
                                border-collapse: collapse;
                                margin-bottom: 15px;
                            }
                            th, td {
                                border: 1px solid #ddd;
                                padding: 8px;
                                text-align: left;
                            }
                            th {
                                background-color: #f2f2f2;
                            }
                            a {
                                text-decoration: none;
                                color: #0a16f7;
                                margin: 15px;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Users</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID Produto</th>
                                    <th>Nome</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${tableContent}
                            </tbody>
                        </table>
                        <div>
                            <a href="/">Home</a>
                            <a href="/uploadProduto">Adicionar Produto</a>
                        </div>
                    </body>
                </html>
            `);
    } else {
      res.status(404).send("Produtos not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving produtos");
  }
});

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await sql`SELECT * FROM produtos;`;
    if (produtos && produtos.rows.length > 0) {
      res.status(200).json(produtos.rows);
    } else {
      res.status(404).send("Produtos not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving produtos");
  }
});

app.get("/produtos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const produtos = await sql`SELECT * FROM produtos WHERE id=${id};`;
    if (produtos && produtos.rows.length > 0) {
      res.status(200).json(produtos.rows[0]);
    } else {
      res.status(404).send("Produto not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving produto");
  }
});

app.put("/produtos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const client = await sql.connect();
    const databaseResponse =
      await client.sql`UPDATE produtos SET nome=${req.body.nome}::text, preco=${req.body.preco}::numeric WHERE id=${id};`;
    if (databaseResponse) {
      res.status(200).json(databaseResponse.rows);
      client.release();
    } else {
      res.status(404).send("Produto not found");
      client.release();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving produto");
  }
});

app.post("/produtos", async (req, res) => {
  try {
    const client = await sql.connect();
    const databaseResponse =
      await client.sql`INSERT INTO produtos (nome, preco) VALUES (${req.body.nome}::text, ${req.body.preco}::numeric);`;
    if (databaseResponse) {
      res.status(201).json(databaseResponse.rows);
      client.release();
    } else {
      res.status(404).send("Produto not found");
      client.release();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving produto");
  }
});

app.delete("/produtos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const client = await sql.connect();
    const databaseResponse =
      await client.sql`DELETE FROM produtos WHERE id=${id};`;
    if (databaseResponse) {
      res.status(200).json(databaseResponse.rows);
      client.release();
    } else {
      res.status(404).send("Produto not found");
      client.release();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving produto");
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
