const express = require ('express');
const router = express.Router()
const Category = require('../models/category')

router.get('/', async (req, res) => {
const categoryLists = await Category.find()
if(!categoryLists){
	res.status(500).json({success: false})
}
res.status(200).json({categoryLists});

})
router.get('/:id', async (req, res) => {
	const categoryList = await Category.findById(req.params.id)
	if(!categoryList) {
		return res.status(500).json({success: false}
			)}
	   return res.status(200).json({categoryList});
})
		 
router.post('/', async (req, res) => {
	let category = new Category({
		name: req.body.name,
		icon: req.body.icon,
		color: req.body.color
	});
		category = await category.save()
		if(!category){
			res.status(500).json({success: false})
		}
		res.status(200).json({category});
})
router.delete('/:id', async(req,res) => {
	Category.findByIdAndDelete(req.params.id).then(category => {
		if (!category) {
			return res.status(404).json({success: false, message: 'Category not found'})
		}else{
			res.status(200).json({success: true, message: 'Category deleted successfully'})
		}
	})
	.catch(err => {
	  return	res.status(400).json({success: "couldn't find category"})
	})
})

module.exports = router