const router = require ("express").Router()
const factRoutes = require("./factRoutes")
router.use ("/fact", factRoutes)
const myListRoutes = require("./myListRoutes")
router.use ("/myList", myListRoutes)
module.exports = router
const movieQuote = require("popular-movie-quotes");