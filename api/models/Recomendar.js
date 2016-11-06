/**
 * Recomendar.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Nombre: {
      type: 'string',
      size:100,
      required: true
    },
    id_local_a: {
    type: 'integer',
    required:true
    },
    Distancia: {
      type: 'float',
      require:true
    },
    owner: {
    model:'Usuario'
    }
  }
};

