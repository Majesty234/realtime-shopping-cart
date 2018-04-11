var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'img/products/polo.png',
		title: 'Polo Shirt',
		description: '100% cutton made polo',
		price: 15
	}),
	new Product({
		imagePath: 'img/products/POLO-WHITE-FRONT.png',
		title: 'Polo Shirt',
		description: '100% cutton made polo',
		price: 20
	}),
	new Product({
		imagePath: 'img/products/POLO-WHITE-BACK.png',
		title: 'Polo Shirt',
		description: '100% cutton made polo',
		price: 25
	}),
	new Product({
		imagePath: 'img/products/CAMBIASSO-POLO-BACK.png',
		title: 'Polo Shirt',
		description: '100% cutton made polo',
		price: 20
	}),
	new Product({
		imagePath: 'img/products/LEGEND-SERIES-T-SHIRT.png',
		title: 'Polo Shirt',
		description: '100% cutton made polo',
		price: 17
	}),
	new Product({
		imagePath: 'img/products/CAMBIASSO-POLO-WHITE.png',
		title: 'Polo Shirt',
		description: '100% cutton made polo',
		price: 30
	})
];
var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err, result){
		done++;
		if (done === products.length) {
			exit();
		};
	});
};
function exit(){
	mongoose.disconnect();
}
