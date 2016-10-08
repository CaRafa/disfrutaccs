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
    	if(err) return next(err);
        
        res.redirect ('/Usuario_natural/mostrar/'+ Usuario_natural.id);

     });
},


	mostrar: function(req,res,next){


    Usuario_natural.findOne({id: req.param('id')}).exec(function(err,resultado){
    
    if (err) {return res.serverError(err);}
   
    res.view({Usuario_natural:resultado});
        
     });
   }



 };