const middlewareController = require("../Controllers/middlewareController");
const productController = require("../Controllers/productController");

const router = require("express").Router();

//Add product
router.post(
  "/",
  middlewareController.verifyTokenAndAdminAuth,
  productController.createProduct
);

//Del product
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  productController.deleteProduct
);

//Upd product
router.put(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  productController.updateProduct
);

//Get theo id
router.get("/find/:id", productController.getProduct);

//Get all
router.get("/", productController.getAllProduct);

module.exports = router;
