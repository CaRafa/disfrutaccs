/**
 * Usuario_Natural.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    Sexo: {
      type: 'string',
      size:45,
      notNull:true
    },
    Puntos: {
      type: 'float'
    },
    Nombre: {
      type: 'string'
    },
    Apellido: {
      type: 'string'
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
    Latitud: {
      type: 'float'
    },
    Longitud: {
      type: 'float'
    },
    Presupuesto: {
      type: 'float',
      notNull:true
    },
    owner:{
      model:'Usuario',
    },
    pets: {
      collection: 'Categorias_preferidas',
      via: 'owner'
    },
    clave: {
      type: 'string',
      required: true
    },
    Resena: {
      collection: 'Resena',
      via:'owner'
    }
  }
};

