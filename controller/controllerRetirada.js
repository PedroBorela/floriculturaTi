var retiradas = require('../model/modelRetirada.js')




exports.criaRetirada = async function(req, res) {
    conteudo = {
        tituloPagina : "Faça seu pedido para retirar já!"
    }
    res.render('criaRetirada', conteudo)
}

exports.criaRetirada_post = async function(req,res){
    var retirada = req.body
    retirada.codigo =   Math.round( Math.random() *1000)

    await retiradas.cria(retirada)

    res.redirect('/')
}


exports.altera_get = async function(req,res){
    var codigo = parseInt(req.params.codigo)
    var retirada = await retiradas.consulta(codigo)
    console.log("Código passado:", codigo);
    console.log("retirada passado:", retirada);

    conteudo = {
        tituloPagina : "Altera retiradas",
        retirada : retirada
    }

    res.render('alteraRetirada',conteudo)
}


exports.altera_post = async function(req,res){
    var retirada = req.body
    retirada.codigo = parseInt(req.params.codigo)


    await retiradas.atualiza(retirada)
    console.log(retirada)

    res.redirect('/consulta')
}

exports.deleta = async function (req, res) {
    var codigo = parseInt(req.params.codigo);
    await retiradas.deleta(codigo);
    res.redirect("/");
  };