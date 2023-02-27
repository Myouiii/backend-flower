const middlewareController = require("../Controllers/middlewareController");
const cartController = require("../Controllers/cartController");
const { route } = require("./auth");

const router = require("express").Router();

router.post("/", middlewareController.verifyToken, cartController.createCart);

router.put(
  "/:id",
  middlewareController.verifyTokenAndUserAuth,
  cartController.updateCart
);

router.delete(
  "/:id",
  middlewareController.verifyTokenAndUserAuth,
  cartController.deleteCart
);

//get all
router.get(
  "/",
  middlewareController.verifyTokenAndAdminAuth,
  cartController.getAllCart
);

module.exports = router;
