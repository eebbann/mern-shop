const {Product} = require('../models/products');
const express = require('express');
const router = express.Router();


router.get( `/`, async (req, res) => {
	const productLists = await Product.find();
	if(!productLists){
		res.status(500).json({success: false})
	}
	res.status(200).json(productLists);
})
router.post('/', async (req, res) => {

	const product = new Product({
		name: req.body.name,
		image: req.body.image,
		quantity: req.body.quantity
	});

	product = await product.save()
	 if(!product){
	  return res.status(500).json({success: false})
	 }
	 res.status(200).json(product);
})
module.exports = router