const middlewareController = require("../Controllers/middlewareController");
const categoryController = require("../Controllers/CategoryController");

const router = require("express").Router();

//Add
router.post(
  "/",
  middlewareController.verifyTokenAndAdminAuth,
  categoryController.createCategory
);

//Del
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  categoryController.deleteCategory
);

//Upd
router.put(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  categoryController.updateCategory
);

//Get theo id
router.get("/find/:id", categoryController.getCategory);

//get all
router.get("/", categoryController.getAllCate);
module.exports = router;
