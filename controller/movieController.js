const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

class MovieController {
  static async getMovies(req, res, next) {
    const { title } = req.body
    let { page, type, year } = req.body

    page = Number(page)
    year = Number(year)
    if (type)
      type = type.toLowerCase()

    if (!page || typeof page !== 'number') {
      page = 1;
    }

    if (!type || (type !== 'movie' && type !== series && type !== "episode")) {
      type = null
    }

    if (!year || typeof year !== "number") {
      year = null
    }

    axios({
      url: `${process.env.OMDB_URL}&s=${title}&page=${page}&type=${type}&y=${year}`,
      method: "get"
    })
      .then((response) => {
        res.status(200).json(
          response.data.Search,
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static async getMovieDetail(req, res, next) {
    const { title } = req.body
    let { id, type, year, plot } = req.body
    id = Number(id)
    year = Number(year)
    if (type)
      type = type.toLowerCase()
    if (plot)
      plot = plot.toLowerCase()
    if (!id || typeof id !== "number") {
      id = undefined
    }

    if (!type || (type !== "movie" && type !== "series" && type !== "episode")) {
      type = null
    }

    if (!year || typeof year !== 'number') {
      year = null
    }

    if (plot !== "short" || plot !== "full") {
      plot = "short"
    }

    axios({
      url: `${process.env.OMDB_URL}&t=${title}&i=${id}&type=${type}&y=${year}&plot=${plot}`,
      method: "get"
    })
      .then((response) => {
        res.status(200).json(
          response.data
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

module.exports = MovieController