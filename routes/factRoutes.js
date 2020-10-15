const router = require ("express").Router()
const factControllers = require ("../controllers/factControllers")
router.route ("/").get(factControllers.findAll)
module.exports = router