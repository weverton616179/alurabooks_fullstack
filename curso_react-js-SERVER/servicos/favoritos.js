const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse( fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse( fs.readFileSync("favoritos.json"))

    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

function insereFavoritos(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json"))
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json"))

    const livrosInserido = livros.find( livro => livro.id === id )
    const novaListaDeFavoritos = [...favoritos, livrosInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavoritos,
}