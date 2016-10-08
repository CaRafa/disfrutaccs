/**
 * Usuario_natural.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysql',
  
  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    correo: {
      type: 'string',
      required: true,
      email: true
    },
    sexo: {
      type: 'string',
      required: true
      
    },
    IDusuario: {
      type: 'string',
      unique: true,
      required: true
    }
  }
};

