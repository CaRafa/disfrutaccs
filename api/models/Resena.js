/**
 * Resenas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    
    Puntaje: {
      type: 'integer'
    },
    
    Fecha_resena: {
      type: 'date'
    },

     Comentario: {
      type: 'text'
    },

    owner: {
    model:'Usuario'
    },

    idusuario: {
    model:'Usuario_natural',
    required: true
    },

    idlocal: {
    model:'Local',
    required: true
    }
  }
};

