var pedidos = require('../model/modelPedido.js')



exports.criaPedido = async function(req, res) {

    conteudo = {
        tituloPagina : "Faça seu pedido já!"
    }
    res.render('criaPedido', conteudo)
}

exports.criaPedido_post = async function(req,res){
    var pedido = req.body
    pedido.codigo = Math.round( Math.random() *1000)
    await pedidos.cria(pedido)

    res.redirect('/')
}

exports.altera_get = async function(req,res){
    var codigo = parseInt(req.params.codigo)
    var pedido = await pedidos.consulta(codigo)
    console.log("Código passado:", codigo);
    console.log("Pedido passado:", pedido);

    conteudo = {
        tituloPagina : "Altera pedidos",
        pedido : pedido
    }

    res.render('alterapedido',conteudo)
}


exports.altera_post = async function(req,res){
    var pedido = req.body
    pedido.codigo = parseInt(req.params.codigo)


    await pedidos.atualiza(pedido)
    console.log(pedido)

    res.redirect('/consulta')
}

exports.deleta = async function (req, res) {
    var codigo = parseInt(req.params.codigo);
    await pedidos.deleta(codigo);
    res.redirect("/");
  };

