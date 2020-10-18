const router = require("express").Router()
const factRoutes = require("./factRoutes")
const myListRoutes = require("./myListRoutes")
router.use("/fact", factRoutes)
router.use("/myList", myListRoutes)
module.exports = router