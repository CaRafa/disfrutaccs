/**
 * Usuario_administrador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    
    Nombre: {
      type: 'string'
    },
    Apellido: {
      type: 'string'
    },
     Fecha_de_nacimiento: {
      type: 'date'
    },
    Alias: {
      type: 'string',
       unique: true
    },
    Correo: {
      type: 'string',
      email:true,
      unique: true
    },
    Contraseña: {
      type: 'string'
    },
    locales: {
      collection: 'Local',
      via:'owner'
    }



  }
};

