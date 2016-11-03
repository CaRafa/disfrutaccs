/**
 * Usuario_natural.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    
    Nombre: {
      type: 'string'
      , required: true
    },
    Apellido: {
      type: 'string'
    },
    Foto_perfil: {
      type: 'int'
    },
    Correo: {
      type: 'email',
      email:true,
      unique: true,
      required: true
    },
    Alias: {
      type: 'string',
       unique: true,
       required: true
    },
    Fecha_de_nacimiento: {
      type: 'date'
    },
    sexo: {
      type: 'string'
    },
    Puntos: {
      type: 'int'
    },
    Presupuesto: {
      type: 'float'
    },
      clave: {
      type: 'string',
      unique: true,
      required: true
    }
  } 
};
