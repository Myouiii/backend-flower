const middlewareController = require("../Controllers/middlewareController");
const userController = require("../Controllers/userController");

const router =require("express").Router();

//Get all users
router.get("/",middlewareController.verifyToken, userController.getAllUsers);

//Delete user
router.delete("/:id",middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);

module.exports = router;