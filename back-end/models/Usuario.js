const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    senha: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', schema, 'usuario');