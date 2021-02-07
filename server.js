const express = require('express');
const cors = required('cors');
const mongoose = required('mongoose');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/debt', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);