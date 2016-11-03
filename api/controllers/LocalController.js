/**
 * LocalController
 *
 * @description :: Server-side logic for managing locals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    registrar: function(req,res){
		Usuario_admin.findOne(req.param('owner'), function encontraradmin (err, admin) {
        if(err) {return next(err);}
        
        res.view({ Usuario_admin: admin });// ('/Local/mostrar/'+ Local.id);

     });
	},


    create: function(req,res,next){
    
        Local.create(req.params.all(), function Localcreado (err, Local) {
        if(err) {return next(err);}

        res.redirect ('/Local/mostrar/'+ Local.id);
        

     });
    
    },

    mostrar: function(req,res,next){

    Local.findOne({id: req.param('id')}).exec(function(err,resultado){
    
    if (err) {return res.serverError(err);}
    console.log(resultado);
    res.view({Local:resultado});
        
     });
    },


    consultar: function(req,res){
     res.view();
    },

    buscar: function(req,res,next){

        var nombre = req.param('Nombre');
       
        if(nombre !== undefined) {
            Local.find({Nombre:{'contains':nombre}}).exec(function(err,resultado){
    
         if (err) {return res.serverError(err);}

         if(resultado !== undefined) {
            console.log(resultado);
         res.view({Local:resultado});
         }
         if(resultado === undefined){
            return res.notFound('No hay locales con ese nombre :c ');}
             }); 
         }
    },

    mislocales: function(req,res,next){
        var id = req.param('owner');

        if(id !== undefined){ Local.find({owner:id}).exec(function(err,resultado){
    
         if (err) {return res.serverError(err);}

         if(resultado !== undefined) {
             console.log(resultado);
             res.view({Local:resultado});
         }
         if(resultado === undefined){return res.notFound('No hay locales con ese nombre :c ');}

            });  
        };

    },


    editarlocal: function(req,res,next){

    Local.findOne({id: req.param('id')}).exec(function(err,resultado){
    if (err) {return res.serverError(err);}
    
    if(resultado !== undefined) {
    res.view({Local:resultado});
    }
    if(resultado === undefined){
    return res.notFound('Errooor');}
        
     });
    },

    actualizar: function(req, res,next){

        Local.update(req.param('id'), req.params.all() , function Localactualizado (err) {
        if(err) {return res.redirect('/Local/editar/'+req.param('id'));}

        res.redirect ('/Local/mostrar/'+ req.param('id'));
     });
    }

};

