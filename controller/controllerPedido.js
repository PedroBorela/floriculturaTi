exports.criaPedido = async function(req, res) {

    conteudo = {
        tituloPagina : "Faça seu pedido já!"
    }

    res.render('criaPedido', conteudo)
}