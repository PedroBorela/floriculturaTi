var pedidos = require('../model/modelPedido.js')
var retiradas = require('../model/modelRetirada.js')

exports.paginaInicial = async function(req, res) {

    conteudo = {
        tituloPagina : "A rede de flores ideal, simples, rápido e sempre pra hoje"
    }

    res.render('index', conteudo)
}

exports.paginaConsulta = async function(req,res){

    conteudo = {
        tituloPagina : "Consultar pedidos e retiradas",
        pedidos: await pedidos.lista_pedidos(),
        retiradas: await retiradas.lista_retiradas()

    }
        res.render('consulta',conteudo)
}
