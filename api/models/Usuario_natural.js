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
      unique: true
    },
    pets: {
      collection: 'Categorias_preferidas',
      via: 'owner'
    }
}
};

