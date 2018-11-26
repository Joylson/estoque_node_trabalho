const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const dbConfig = require('./config/database');
const cors = require('cors');

const usuario = require('./routes/Usuario');
const setor = require('./routes/Setor');
const fornecedor = require('./routes/Fornecedor');
const produto = require('./routes/Produto');
const EntradaSaida = require('./routes/EntradaSaida');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

dbConfig('mongodb://localhost:27017/estoque');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());

app.use('/Usuario', usuario);
app.use('/Setor', setor);
app.use('/Fornecedor', fornecedor);
app.use('/Produto', produto);
app.use('/EntradaSaida', EntradaSaida);

module.exports = app;