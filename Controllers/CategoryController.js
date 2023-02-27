const Category = require("../models/Category");

const CategoryController = {
  //Create
  createCategory: async (req, res) => {
    const newCategory = new Category(req.body);

    try {
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //Update
  updateCategory: async (req, res) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCategory);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //Delete
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("Danh mục đã được xoá...");
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //getCategory
  getCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.status(200).json(category);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //getAllCategory
  getAllCate: async (req, res) => {
    try {
      const orders = await Category.find();
      res.status(200).json(orders);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  //   getAllProduct: async (req, res) => {
  //     const qNew = req.query.new;
  //     const qCategory = req.query.category;
  //     try {
  //       let products;

  //       if (qNew) {
  //         products = await Product.find().sort({ createdAt: -1 }).limit(1);
  //       } else if (qCategory) {
  //         products = await Product.find({
  //           categories: {
  //             $in: [qCategory],
  //           },
  //         });
  //       } else {
  //         products = await Product.find();
  //       }

  //       res.status(200).json(products);
  //     } catch (err) {
  //       return res.status(500).json(err);
  //     }
  //   },
};

module.exports = CategoryController;
