const Contato = require("../models/contatoModel");

exports.index = (req, res) => {
  res.render("contato", {
    contato: {},
  });
};

exports.register = async (req, res) => {
  try {
    const construct = req.body;
    construct.userFK = res.locals.user._id;
    console.log(construct.userFK);
   
    const contato = new Contato(construct);

    await contato.register();
    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("/contato/index"));
      return;
    }
    req.flash("success", "Contato registrado com sucesso.");
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato.id}`)
    );

  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.editIndex = async (req, res) => {
    try{
        if (!req.params.id) return res.render("404");
        const contato = await Contato.buscaPorId(req.params.id);
      
        if (!contato) return res.render("404");
      
        res.render("contato", { contato });
    }catch(e){
        console.log(e);
        res.render('404');
    }
 
};

exports.edit = async (req, res) => {
  try {
    if (!req.params.id) return res.render("404");
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);
    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() =>{
        const id = req.originalUrl.split('/edit/')[1];
        res.redirect('/contato/index/'+id);
    }
      );
      return;
    }
    req.flash("success", "Contato editado com sucesso.");
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato.id}`)
    );
  } catch (e) {
    console.log(e);
    res.render("404");
  }
};

exports.delete = async (req, res)=>{
    try{
        if(!req.params.id) return res.render('404');
        const contato= await Contato.delete(req.params.id);
        if(!contato) return res.render('404');
        req.flash("success", "Contato deletado com sucesso.");
        req.session.save(() =>
          res.redirect(`/`)
        );

    }catch(e){
        console.log(e);
        res.render('404')
    }
    

}