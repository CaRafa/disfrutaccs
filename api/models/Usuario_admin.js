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
      type: 'string',
      required: true
    },
    Apellido: {
      type: 'string'
    },
     Fecha_de_nacimiento: {
      type: 'date'
    },
    Alias: {
      type: 'string',
      unique: true,
      required: true
    },
    Correo: {
      type: 'email',
      email:true,
      unique: true,
      required: true
    },
    Contraseña: {
      type: 'string',
      unique: true,
      required: true
    },
    locales: {
      collection: 'Local',
      via:'owner'
    }



  }
};

