/**
 * ResenasController
 *
 * @description :: Server-side logic for managing resenas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    buscarusuario: function(req,res,next){


        Usuario_natural.findOne({Alias:req.param('Nombre')}).exec(function(err, resultado){

            if(resultado === undefined){
                res.notFound('Usuario no encontrado');
            }
             else{

                    if(req.param('Clave')!== resultado.clave){
                        res.notFound('clave incorrecta');
                    }
                    else{
                            resultado.idlocal = req.param('idlocal');
                            resultado.Comentario = req.param('Comentario');
                            console.log(resultado);

                           res.view({Resenas:resultado});
                    }
                    

            }

        });


    },


 	
    nueva: function(req,res,next){

             Resenas.create(req.params.all(), function Resenacreada (err, resena) {
                            
                             if(err) {return next(err);}

                             res.redirect ('/Local/mostrar/'+resena.idlocal);
                         });

            /*Usuario_natural.findOne({Alias:req.param('Nombre')}).exec(function(err, resultado){
                

            if(resultado === undefined){
                res.notFound('Usuario no encontrado');
            }
            else{

                    if(req.param('Clave')!== resultado.clave){
                        res.notFound('clave incorrecta');
                    }
                    else{
                            console.log(req.idusuario);
                            req.idusuario = resultado.id;
                            console.log(req.idusuario);


                            Resenas.create(req.params.all(), function Resenacreada (err, resena) {
                                console.log(resena);

                             if(err) {return next(err);}

                             res.redirect ('/Local/mostrar/'+resena.owner);
        

                              });
                    }
                    


            }
            


        });*/
    
    }

	
};

