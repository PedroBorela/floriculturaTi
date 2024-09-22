exports.carregaProdutos = async function(req, res) {

    conteudo = {
        tituloPagina : "As melhores flores para as melhores ocasiões"
    }

    res.render('produtos', conteudo)
}