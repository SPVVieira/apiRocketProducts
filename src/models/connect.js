const mongoose = require('mongoose');

//iniciando conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

require('./product');

module.exports= mongoose;