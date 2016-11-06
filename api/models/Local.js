/**
 * Local.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
    attributes: {
    id_local: {
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
    Direccion: {
      type: 'string', 
      size:200
    },
    Nro_reseñas: {
      type: 'float'
    },
    Puntaje: {
      type: 'float'
    },
    Preciobase: {
      type: 'float',
      notNull:true
    },
    Telefono: {
      type: 'string',
      size:45,
      notNull:true
    },
    Tipodelocal: {
      type: 'string',
      notNull:true
    },
    descripcion: {
      type: 'string',
      notNull:true
    },
    owner: {
    model:'Usuario'
    }
  }
};

