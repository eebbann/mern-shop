const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose'); 
const productsRouter = require('./routes/products')
const userRouter = require('./routes/users')
const categoryRouter = require('./routes/categories')
// const authRouter = require('./routes/auth')

require ('dotenv').config();

const api = process.env.API_URL;
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(`${api}/products`,productsRouter)
app.use(`${api}/users`,userRouter)
app.use(`${api}/categories`,categoryRouter)






mongoose.connect(process.env.CONNECTION_STRING, {
	useNewUrlParser: true
})
.then(()=>{(console.log('connected the database'))})
.catch((err)=>{
	console.log(err)
})
app.listen(3200, () => {
		console.log(' http://loclhost:3200')
});