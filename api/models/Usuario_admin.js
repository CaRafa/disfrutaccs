/**
 * Usuario_admin.js
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
    apellido: {
      type: 'string'
    },
    correo: {
      type: 'string'
     
    },
    Idadmin: {
      type: 'string',
      unique: true
    }/*
     edad: {
      type: 'int'
    },
    dia: {
      type: 'int',
      unique: true
    },
    mes: {
      type: 'int',
      unique: true
    },
    ano: {
      type: 'int',
      unique: true
    }*/
    /*puntaje: {
      type: 'int'
    }*/
  }
};

