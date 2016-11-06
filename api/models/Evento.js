/**
 * Eventos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    id_evento: {
    type: 'integer',
    unique: true,
    autoIncrement: true
    },
    Nombre: {
      type: 'string',
       size:100,
      required: true
    },
    Categoria: {
      type: 'string',
       size:20
    },
     Descripcion: {
      type: 'text'
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
      type: 'integer'
    },
    Nro_resenas: {
      type: 'float'
    },
    Puntaje: {
      type: 'float'
    },
    owner: {
    model:'Usuario'
    }
   }
};

