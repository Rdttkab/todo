const router = require("express").Router();
const controller = require("../controller/todoController");

router.get("/", controller.getAllTodo());

module.exports = router;
