const router = require("express").Router()
const myListControllers = require("../controllers/myListControllers")
router.route("/:id")
    .get(myListControllers.findById)
    .post(myListControllers.create)
router.route("")
    .get(myListControllers.findAll)
module.exports = router
