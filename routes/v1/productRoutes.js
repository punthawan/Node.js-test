const express = require('express');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../../controllers/productControllers');

const router = express.Router();

router.post('/', createProduct); // Create a new product

router.get('/', getProducts); // Get all products

router.get('/:id', getProductById); // Get a single product by ID

router.put('/:id', updateProduct); // Update a product by ID

router.delete('/:id', deleteProduct); // Delete a product by ID

module.exports = router;
