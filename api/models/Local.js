/**
 * Local.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysql',
  attributes: {
    nombre: {
      type: 'string'
    },
    tipo: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
     
    },
    IDadmin: {
      type: 'string',
      unique: true
    },
    telefono: {
      type: 'string'
    },
    edadmin: {
      type: 'string'
    },/*
    ubicacion: {
      type: 'string'
    },*/
    preciobase: {
      type: 'string'
    }/*
    nreseñas: {
      type: 'int'
    },*//*
    puntaje: {
      type: 'int'
    }*/
  }
};

