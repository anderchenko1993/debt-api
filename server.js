const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando a conexão com o DB
mongoose.connect('mongodb://localhost:27017/debt', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

// Carrega os modelos
requireDir('./src/models');

// Rotas
app.use('/debt-api', require('./src/routes'));

app.listen(3001);