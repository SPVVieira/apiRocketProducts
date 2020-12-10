const express = require('express');
const cors = require('cors');
//iniciando app
const app = express();
//permitir envio de dados json
app.use(express.json());
app.use(cors());
//importando conexao com banco
const mongo = require('./models/connect');
//importando rotas
app.use('/api', require('./routes/routes'));

//verificando se existe porta nas variáveis de ambiente caso não usa a 3000
const port = process.env.PORT || 3000;

//iniciando servidor na porta
app.listen(port);