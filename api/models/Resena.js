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
<<<<<<< HEAD:api/models/Resena.js
      type: 'text'
    },
    owner: {
    model:'Usuario'
=======
      type: 'string'
    },

    idusuario: {
    model:'Usuario_natural',
    required: true
    },
    
    idlocal: {
    model:'Local',
    required: true
>>>>>>> origin/master:api/models/Resenas.js
    }



  }
};

