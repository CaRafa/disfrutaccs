/**
 * Categorias_preferidas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_categoria_a: {
    type: 'integer',
    required:true
    },
    Nombre: {
      type: 'string',
      size:45,
      required: true
    },
    id_usuario_a: {
    type: 'integer',
    required:true
    },
    owner: {
    model:'Usuario_Natural'
    }
  }
};

