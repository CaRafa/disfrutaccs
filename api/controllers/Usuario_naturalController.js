/**
 * Usuario_naturalController
 *
 * @description :: Server-side logic for managing usuario_naturals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	registrar: function(req,res){
		res.view();
	}
    ,

    create: function(req,res,next){
    
    Usuario_natural.create(req.params.all(), function Usuario_naturalcreado (err, Usuario_natural) {
    	if(err) {return next(err);}

        res.redirect ('/Usuario_natural/mostrar/'+ Usuario_natural.id);
        

     });
    },


	mostrar: function(req,res,next){

    Usuario_natural.findOne({id: req.param('id')}).exec(function(err,resultado){
    
    if (err) {return res.serverError(err);}
    console.log(resultado);
    res.view({Usuario_natural:resultado});
        
     });
    },
    
    consultar: function(req,res){
     res.view();
    },

    buscar: function(req,res,next){

    Usuario_natural.findOne({Alias: req.param('Alias')}).exec(function(err,resultado){
    
    if (err) {return res.serverError(err);}

    if(resultado !== undefined) {
    console.log(resultado);
    res.view({Usuario_natural:resultado});
    }
    if(resultado === undefined){
    return res.notFound('Could not find, sorry.');}

        
     });	
    } 

 };