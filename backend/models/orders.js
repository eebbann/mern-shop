const mongoose = require('mongoose');

const orderSchema= mongoose.Schema({
	orderId: {
		type: String,
		required: true
	}
});

exports.Order = mongoose.model('Order', orderSchema);