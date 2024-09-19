exports.criaPedido = async function(req, res) {

    conteudo = {
        tituloPagina : "Faça seu pedido já!"
    }

    res.render('criaPedido', conteudo)

}

exports.criaRetirada = async function(req, res) {

    conteudo = {
        tituloPagina : "Faça seu pedido para retirar já!"
    }

    res.render('criaRetirada', conteudo)
}