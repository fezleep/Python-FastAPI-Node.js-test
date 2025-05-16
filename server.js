const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:8000/items/");
    res.render("index", { items: response.data.items });
  } catch (error) {
    res.send("Erro ao buscar dados da API");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
