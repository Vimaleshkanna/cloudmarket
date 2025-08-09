const router = require('express').Router();
const { listProducts } = require('../controllers/product.controller');
const { verifyToken } = require('../utils/auth-util');


router.post('/listProducts', verifyToken, listProducts);

module.exports = router;