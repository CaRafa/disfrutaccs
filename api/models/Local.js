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
    type: 'int',
    unique: true,
    primaryKey: true
    },
    Nombre: {
      type: 'string'
    },
    Foto_perfil: {
      type: 'int'
    },
    Edad_minima: {
      type: 'int'
    },
    Latitud: {
      type: 'float'
    },
    Longitud: {
      type: 'float'
    },
    Nro_reseñas: {
      type: 'int'
    },
    Puntaje: {
      type: 'float'
    },
    Precio_base: {
      type: 'float'
    },
    Telefono: {
      type: 'int'
    },
    Tipo_de_local: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    }
  }
};

