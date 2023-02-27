const authController = require("../Controllers/authControllers");
const middlewareController = require("../Controllers/middlewareController");

const router = require("express").Router();

//Register
router.post("/register", authController.registerUser);

//Login
router.post("/login", authController.loginUser);

//refresh
router.post("/refresh", authController.requestRefreshToken);

//Logout
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.userLogout
);

module.exports = router;
