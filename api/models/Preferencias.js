/**
 * Preferencias.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
connection: 'mysql',
  attributes: {
  	 Latitud: {
      type: 'float'
    },
    Longitud: {
      type: 'float'
    },
    Tipo_de_local: {
      type: 'string'
    },
    Nombre_local_favorito: {
      type: 'string'
  }
  }
};

