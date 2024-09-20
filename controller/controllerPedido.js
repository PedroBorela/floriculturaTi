var pedidos = require('../model/modelPedido.js')



exports.criaPedido = async function(req, res) {

    conteudo = {
        tituloPagina : "Faça seu pedido já!"
    }
    res.render('criaPedido', conteudo)
}

exports.criaPedido_post = async function(req,res){
    var pedido = req.body
    pedido.dataEntrega = new Date(pedido.dataEntrega).toLocaleDateString('pt-BR')
    await pedidos.cria(pedido)

    res.redirect('/')
}

