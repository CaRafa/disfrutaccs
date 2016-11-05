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

    /*create: function(req,res,next){

    Usuario_natural.find({Alias: req.param('Alias')}).exec(function(err,resultado){

    if (err) {return res.serverError(err);}
        
    if(resultado===undefined)
    {

    Usuario_natural.create(req.params.all(), function Usuario_naturalcreado (err, Usuario_natural) {
        if(err) {return next(err);}

                
          res.redirect ('/Usuario_natural/mostrar/'+ Usuario_natural.id);

          });

    }

    });
    
   else
    { return res.notFound('Could not find, sorry.'); }

    },


    create: function(req,res,next){
    
    Usuario_natural.findOrCreate({alias: req.param('alias')},{req.params.all()}).exec(function Usuario_naturalcreado(err, Usuario_natural) {
    	if(err) {return next(err);}

                
          res.redirect ('/Usuario_natural/mostrar/'+ Usuario_natural.id);

      });
    },*/


	mostrar: function(req,res,next){
    Usuario_natural.findOne({id: req.param('id')}).exec(function(err,resultado){

    console.log(resultado)
    if (err) {return res.serverError(err);}
    console.log(resultado);
    res.view({Usuario_natural:resultado});
        
     });
    },
    
    consultar: function(req,res){
     res.view();
    },

    buscar: function(req,res,next){

    Usuario_natural.find({Alias:{'contains':req.param('Alias')} }).exec(function(err,resultado){
    
    if (err) {return res.serverError(err);}

    if(resultado !== undefined) {

    res.view({Usuario_natural:resultado});
    }
    if(resultado === undefined){
    return res.notFound('Could not find, sorry.');}

        
     });	
    } ,

    editar: function(req,res,next){
	Usuario_natural.findOne({id: req.param('id')}).exec(function(err,resultado){
    if (err) {return res.serverError(err);}
    
    if(resultado !== undefined) {
    res.view({Usuario_natural:resultado});
    }
    if(resultado === undefined){
    return res.notFound('Errooor');}
        
     });
    },

    actualizar: function(req, res,next){

    	Usuario_natural.update(req.param('id'), req.params.all() , function Usuario_naturalactualizado (err) {
    	if(err) {return res.redirect('/Usuario_natural/editar/'+req.param('id'));}

        res.redirect ('/Usuario_natural/mostrar/'+ req.param('id'));
        
     });
    },

    perfil: function (req,res,next){

    		Usuario_natural.findOne({Alias:req.param('Alias')}).exec(function(err,resultado){
    		

    		if(resultado !== undefined ){
    			
    			if(resultado.clave === req.param('clave')){
    			return res.view({Usuario_natural:resultado});}

    			else{return res.notFound('Clave invalida');}

    		}

    		res.redirect ('/Usuario_admin/perfil/?Alias='+req.param('Alias')+'&clave='+req.param('clave'));

    			}
    		)


    }





 };