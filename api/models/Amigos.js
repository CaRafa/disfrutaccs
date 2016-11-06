/**
 * Amigos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_amigos: {
    type: 'integer',
    required:true
    },
    Alias_amigo: {
      type: 'string',
      size:45,
      required: true
    },
    Puntaje: {
      type: 'float'
    },
    id_usuario_a: {
    type: 'integer',
    required:true
    }
  }
};

