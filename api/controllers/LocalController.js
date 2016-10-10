/**
 * LocalController
 *
 * @description :: Server-side logic for managing locals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    registrar: function(req,res){
		res.view();
	},


    create: function(req,res,next){
    
    Local.create(req.params.all(), function localcreado (err, Local) {
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
    }





};

