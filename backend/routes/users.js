const express = require('express');
const router = express.Router();
router.get('/', async(req, res) => {
	const profileList = await Profile.find();
	if(!profileList) {
		res.status(500).json({success: false})
	}
	res.send(profileList);
})

module.exports = router;