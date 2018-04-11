var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET Shop Page. */
router.get('/', function(req, res, next) {
	var successMsg = req.flash('success')[0];
	Product.find(function(err, docs){
		var productChunks = [];
		var chunkSize =4;
		for (var i = 0; i < docs.length; i += chunkSize) {
			productChunks.push(docs.slice(i, i + chunkSize));
		};
		res.render('shop', { title: 'Realtime Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg });
	});
});


module.exports = router;
