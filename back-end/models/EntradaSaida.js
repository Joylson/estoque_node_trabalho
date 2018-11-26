const mongoose = require('mongoose');

   const schema = mongoose.Schema({
      data_entrada:{
         type: Date,
         required: true
      },
      produto:{
          type:mongoose.SchemaTypes.ObjectId,
          ref:'Produto',
          required: true
      },
      usuario:{
          type:mongoose.SchemaTypes.ObjectId,
          ref:'Usuario',
          required: true
      },
      entrada_saida:{
          type: String,
          required: true
      },
      descricao:{
        type: String,
        required: false
      }
   });

   module.exports = mongoose.model('EntrdaSaida', schema, 'entradaSaida');