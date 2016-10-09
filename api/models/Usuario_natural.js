/**
 * Usuario_Natural.js
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
    apellido:{
      type: 'string'
    },
    correo: {
      type: 'string',
      email: true
    },
    sexo: {
      type: 'string',
    },
    IDusuario: {
      type: 'string',
      required: true
    } 

  }

};
      
/*
connection: 'mysql',
tableName: 'Usuario_Natural'
  attributes: {
    idUsuario_U: {
      type: 'int',
       unique: true,
      primaryKey: true,
      columnName: 'idUsuario_U'
    },
    Nombre: {
      type: 'string',
      columnName: 'Nombre'
    },
    Apellido: {
      type: 'string',
      columnName: 'Apellido'
    },
    Edad: {
      type: 'int',
      columnName: 'Edad'
>>>>>>> origin/master
    },
    //Que la foto de perfil sea un entero es meramente provisional es para que ya este ahi la variable
    Foto_perfil: {
      type: 'int',
      columnName: 'Foto_perfil'
    },
    Correo: {
      type: 'email',
      unique: true,
      columnName: 'Correo'
    },
    Alias: {
      type: 'string',
<<<<<<< HEAD
      unique: true,
      required: true
=======
       unique: true,
      columnName: 'Alias'
    },
    Fecha_de_nacimiento: {
      type: 'date',
      columnName: 'Fecha_de_nacimiento'
    },
    sexo: {
      type: 'string',
      columnName: 'sexo'
    },
    Puntos: {
      type: 'float',
      columnName: 'Puntos'
    },
    Presupuesto: {
      type: 'float',
      columnName: 'Presupuesto'
    },
    Latitud: {
      type: 'float',
      columnName: 'Latitud'
    },
    Longitud: {
      type: 'float',
      columnName: 'Longitud'
    },
    Contraseña: {
      type: 'string',
      unique: true,
      columnName: 'Contraseña'
>>>>>>> origin/master
    }
  }
};
*/

