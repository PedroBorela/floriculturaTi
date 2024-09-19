

exports.paginaInicial = async function(req, res) {

    conteudo = {
        tituloPagina : "A rede de flores ideal, simples, rápido e sempre pra hoje"
    }

    res.render('index', conteudo)
}

