const { Router } = require("express")
const { getFavoritos, postFavorito, deletefavorito } = require("../controladores/favoritos")

const router = Router()

router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deletefavorito)

module.exports = router