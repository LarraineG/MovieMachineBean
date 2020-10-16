const router = require ("express").Router()
const myListControllers = require ("../controllers/myListControllers")
router.route ("/").post(myListControllers.create)
router.route ("/:id").get(myListControllers.findById)
module.exports = router

