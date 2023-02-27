const Cart = require("../models/Cart");

const cartController = {
  //Create
  createCart: async (req, res) => {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //Update
  updateCart: async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //Delete
  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //get all
  getAllCart: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = cartController;
