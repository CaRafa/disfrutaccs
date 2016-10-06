/**
 * Locales.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

connection: 'mysql',
tableName: 'Local'
  attributes: {
    idLocal: {
      type: 'int',
     unique: true,
      primaryKey: true,
      columnName: 'idLocal'
    },
    Nombre: {
      type: 'string',
            columnName: 'Nombre'
    },
    Foto_perfil: {
      type: 'int',
            columnName: 'Foto_perfil'
    },
    Edad_minima: {
      type: 'int',
            columnName: 'Edad_minima'
    },
    Latitud: {
      type: 'float',
            columnName: 'Latitud'
    },
    Longitud: {
      type: 'float',
            columnName: 'Longitud'
    },
    Nro_reseñas: {
      type: 'int',
            columnName: 'Nro_reseñas'
    },
    Puntaje: {
      type: 'float',
            columnName: 'Puntaje'
    },
    Precio_base: {
      type: 'int',
            columnName: 'Precio_base'
    },
    Telefono: {
      type: 'int',
            columnName: 'Telefono'
    },
    Tipo_de_local: {
      type: 'string',
            columnName: 'Tipo_de_local'
    },
    descripcion: {
      type: 'string',
            columnName: 'descripcion'
    }
  }
};

