const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
	name: {	
		type: String,
		required: true
	}
});
	exports.Profile = mongoose.model('Profile', profileSchema);