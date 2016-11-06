/**
 * Local.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
    attributes: {
    idLocal: {
    type: 'integer',
    unique: true,
    autoIncrement: true
    },
    Nombre: {
      type: 'string',
      size:100,
      required: true
    },
    Edad_minima: {
      type: 'integer'
    },
    Latitud: {
      type: 'float'
    },
    Longitud: {
      type: 'float'
    },
    Nro_reseñas: {
      type: 'float'
    },
    Puntaje: {
      type: 'float'
    },
    Preciobase: {
      type: 'float'
    },
    Telefono: {
      type: 'string',
      size:45
    },
    Tipodelocal: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    owner: {
    model:'Usuario',
    required: true
    }
  }
};

