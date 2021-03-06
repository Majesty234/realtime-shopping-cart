var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
	//username: {type: String},
	email: {type: String, required: true},
	password: {type: String, required: true}
});

userSchema.methods.encryptPassword = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);