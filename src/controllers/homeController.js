const Contato = require('../models/contatoModel');


exports.index = async ( req , res )=> {
    if(!res.locals.user) return res.render('login');

    try{
    const contatos = await Contato.buscaContatos(res.locals.user._id);
    res.render('index', { contatos });
    }catch(e){
        console.log(e);
    }
}
