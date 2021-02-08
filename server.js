const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/debt', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

require('./src/models/Debt');

// Rotas
app.use('/debt-api', require('./src/routes'));




app.listen(3001);