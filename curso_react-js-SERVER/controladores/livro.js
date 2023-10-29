const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro, deletaLivro } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getLivrosPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("id invalido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("livro inserido com sucesso")
    } catch(erro) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body

            modificaLivro(body, id)
            res.send("item modificado comn sucesso")
        } else {
            res.status(422)
            res.send("id invalido")
        }
    } catch(erro) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaLivro(id)
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
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}