const mongoose = require('mongoose');

   const schema = mongoose.Schema({
      razao_social:{
         type: String,
         required: true
      },
      cnpj:{
          type: String,
          required: true
      },
      telefone:{
          type: String,
          required: false
      }
   });

   module.exports = mongoose.model('Fornecedor', schema, 'fornecedor');