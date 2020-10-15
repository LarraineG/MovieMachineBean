const router = require ("express").Router()
const factRoutes = require("./factRoutes")
router.use ("/fact", factRoutes)
module.exports = router