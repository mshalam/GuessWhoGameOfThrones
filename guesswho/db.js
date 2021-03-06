var mongoose = require('mongoose');
var URLSlugs = require('mongoose-url-slugs');
var passportLocalMongoose = require('passport-local-mongoose');

var User = mongoose.Schema({
	username: String,
	password: String,
	currentWinStreak: Number,
	bestWinStreak: Number	
});




//List.plugin(URLSlugs('name'));
User.plugin(passportLocalMongoose);

mongoose.model('User', User);
mongoose.connect('mongodb://localhost:10521/userdb');


