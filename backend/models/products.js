const mongoose = require('mongoose');
//mongoose schema structuring the database
const productSchema = mongoose.Schema({
	name: {
		type:String,
		unique:true,
		required: true
	},
	description: {
		type:String,
		required: true
	},
	richDescription: {
		type:String, 
		default: ''
	},
	image: {
		type:String, 
		default: ''
	},
	images:[{
		type:String,
	}],
	brand: {
		type:String,
		default: ' '
	},
	price: {
		type:Number,
		default: 0,
	},
	category:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Category',
		required: true
	},
	quantity:{
		type: Number,
		required: true,
		min:0,
		max:255
	},
	rating:{
		type: Number,
		default: 0,
		min:0,
		max:5
	},
	numReviews:{
		type:Number,
		default:0,
	},
	isFeatured:{
		type:Boolean,
		default:false
	},
	dateCreated:{
		type:Date,
		default:Date.now
	},

}); 

exports.Product = mongoose.model('Product', productSchema);