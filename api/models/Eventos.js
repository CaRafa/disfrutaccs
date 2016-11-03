/**
 * Eventos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    
    Nombre: {
      type: 'string',
      required: true
    },
    Categoria: {
      type: 'string'
    },
     Descripcion: {
      type: 'string'
    },
    Fecha_ini: {
      type: 'date',
      required: true
    },
    Fecha_cul: {
      type: 'date',
      required: true
    },
    Edad_min: {
      type: 'int'
    },
    Nro_resenas: {
      type: 'int'
    }
   }
};

