/**
 * Local.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
    attributes: {
    /*idLocal: {
    type: 'string',
    unique: true
    },*/
    Nombre: {
      type: 'string',
      required: true
    },/*
    Foto_perfil: {
      type: 'int'
    },*/
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
    Preciobase: {
      type: 'float'
    },
    Telefono: {
      type: 'int'
    },
    Tipodelocal: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    owner: {
    model:'Usuario_admin',
    required: true
    }





  }
};

