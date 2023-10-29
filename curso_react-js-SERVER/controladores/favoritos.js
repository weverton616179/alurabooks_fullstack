const { getTodosFavoritos, insereFavoritos, deletaFavoritoPorId } = require("../servicos/favoritos")

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavoritos(id)
        res.status(201)
        res.send("livro inserido com sucesso")
    } catch(erro) {
        res.status(500)
        res.send(error.message)
    }
}

function deletefavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaFavoritoPorId(id)
            res.send("item deletado com SUCESSO")
        } else {
            res.status(422)
            res.send("id invalido")
        }
    } catch(erro) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deletefavorito,
}