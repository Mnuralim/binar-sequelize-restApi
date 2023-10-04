const { Product } = require("../models");

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      price,
      stock,
    });
    res.status(200).json({
      status: true,
      data: {
        newProduct,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const findProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: true,
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const findProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      status: true,
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  try {
    const product = await Product.update(
      {
        name,
        price,
        stock,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      status: true,
      message: "Data updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      status: true,
      message: "Data deleted",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  findProducts,
  findProductById,
  updateProduct,
  removeProduct,
};
