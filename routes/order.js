const middlewareController = require("../Controllers/middlewareController");
const OrderController = require("../Controllers/OrderController");

const router = require("express").Router();

//Add order
router.post("/", middlewareController.verifyToken, OrderController.createOrder);

//Del order
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  OrderController.deleteOrder
);

//upd order
router.put(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  OrderController.updateOrder
);

//get user order
router.get(
  "/find/:userId",
  middlewareController.verifyTokenAndAdminAuth,
  OrderController.getOrderUser
);

//get all
router.get(
  "/",
  middlewareController.verifyTokenAndAdminAuth,
  OrderController.getAllOrder
);

//get Turnover
router.get(
  "/income",
  middlewareController.verifyTokenAndAdminAuth,
  OrderController.getTurnover
);

module.exports = router;
