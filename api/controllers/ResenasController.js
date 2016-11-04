/**
 * ResenasController
 *
 * @description :: Server-side logic for managing resenas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

 	standby: function(req,res){
		Local.findOne(req.param('owner'), function encontraradmin (err, admin) {
        if(err) {return next(err);}
        
        res.view({ Usuario_admin: admin });// ('/Local/mostrar/'+ Local.id);

     });
	},


    nueva: function(req,res,next){
    
        Resenas.create(req.params.all(), function Resenacreada (err, resena) {
        if(err) {return next(err);}

        res.redirect ('/Local/mostrar/'+resena.owner);
        

     });
    
    },

	
};

