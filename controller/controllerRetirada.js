var retiradas = require('../model/modelRetirada.js')




exports.criaRetirada = async function(req, res) {
    conteudo = {
        tituloPagina : "Faça seu pedido para retirar já!"
    }
    res.render('criaRetirada', conteudo)
}

exports.criaRetirada_post = async function(req,res){
    var retirada = req.body
    await retiradas.cria(retirada)

    res.redirect('/')
}