const express = require('express')
const movieController = require('../controller/movieController')
const router = express.Router()

router.get('/search', movieController.getMovies)
router.get('/detail', movieController.getMovieDetail)

module.exports = router
