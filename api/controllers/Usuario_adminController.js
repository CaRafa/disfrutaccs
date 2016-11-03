/**
 * Usuario_adminController
 *
 * @description :: Server-side logic for managing usuario_admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	registrar: function(req,res){
		res.view();
	}
    ,

    create: function(req,res,next){
    
    Usuario_admin.create(req.params.all(), function Usuario_admincreado (err, Usuario_admin) {
    	if(err) {return next(err);}

        res.redirect ('/Usuario_admin/mostrar/'+ Usuario_admin.id);
        

     });
    },







	mostrar: function(req,res,next){


    Usuario_admin.findOne({id: req.param('id')}).exec(function(err,resultado){
    
    if (err) {return res.serverError(err);}
    console.log(resultado);
    res.view({Usuario_admin:resultado});
        
     });
    },
    






    consultar: function(req,res){
     res.view();
    },

    buscar: function(req,res,next){

    Usuario_admin.findOne({Alias: req.param('Alias')}).exec(function(err,resultado){
    
    if (err) {return res.serverError(err);}

    if(resultado !== undefined) {
    console.log(resultado);
    res.view({Usuario_admin:resultado});
    }
    if(resultado === undefined){
    return res.notFound('Could not find, sorry.');}

        
     });	
    },

    perfil: function (req,res,next){

            Usuario_admin.findOne({Alias:req.param('Alias')}).exec(function(err,resultado){
            

            if(resultado !== undefined){
                if(req.param('clave')===resultado.clave){
            return res.view({Usuario_admin:resultado});}
            else{return res.notFound('Clave invalida');}
            }

            if(resultado === undefined){
            return res.notFound('Perfil no existente');}

                }
            )


    }
 







 };