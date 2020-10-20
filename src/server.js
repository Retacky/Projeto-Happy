const express = require("express");
const path = require("path");
const pages = require("./pages");

const server = express();

// utilizando os arquivos estáticos
server.use(express.static("public"));

// abrindo uma rota
server
  // utilizar body do req
  .use(express.urlencoded({ extended: true }))
  // definindo 'views' como diretório principal a partir daqui
  .set("views", path.join(__dirname, "views"))
  // configurando handlebars
  .set("view engine", "hbs")
  // criando as rotas a partir do 'pages.js'
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/create-orphanage", pages.saveOrphanage)

/* Ligando o servidor */
server.listen(process.env.PORT || 5500, () => console.log("Servidor rodando na porta 5500"));
