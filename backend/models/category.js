const express = require('express');
const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		default: ''
	},
	color: {
		type: String,
	},
});

module.exports = mongoose.model('Category', categorySchema);