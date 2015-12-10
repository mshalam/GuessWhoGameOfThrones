var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');




/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});



router.get('/guesswho', function(req, res, next) {
 // res.render('index', { user: req.user });
  
  User.findOne({username: req.user.username}, function(err, user) {
    	var showForm = !!req.user && req.user.username == user.username;
    	//console.log(showform);
    	//console.log(user.lists);
    	//console.log(user.username);
    	res.render('gameBoard', { 
    	  showForm: showForm, 
    	  highScore: user.highScore, 
    	  username: user.username
    });
  
  });
  
});




router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

router.get('/win', function(req, res) {

  //update current win streaks
  if(typeof req.user.currentWinStreak === 'undefined')
  {
  	console.log('in');
  	req.user.currentWinStreak = 1;
  	req.user.bestWinStreak = 1;
  }
  else
  {
  	req.user.currentWinStreak ++;
  }
  
  //update best win streak
  if(req.user.currentWinStreak > req.user.bestWinStreak)
  {
  	req.user.bestWinStreak = req.user.currentWinStreak;
  }
    
  req.user.save(function(err, saveduser, count) {
      res.render('win', { currentWinStreak: req.user.currentWinStreak, bestWinStreak: req.user.bestWinStreak });
    });
  
});

router.get('/lose', function(req, res) {

	req.user.currentWinStreak = 0;

	req.user.save(function(err, saveduser, count) {
      res.render('lose', { currentWinStreak: req.user.currentWinStreak, bestWinStreak: req.user.bestWinStreak });
    });

  
});

router.get('/instructions', function(req, res) {
  res.render('instruction');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', function(req, res) {
  User.register(new User({username:req.body.username}), 
      req.body.password, function(err, user){
    if (err) {
      res.render('register',{message:'Your registration information is not valid'});
    } else {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/guesswho');
      });
    }
  });   
});

router.post('/login', function(req,res,next) {

	//cosole.log("login attempt");

  passport.authenticate('local', function(err,user) {
    if(user) {
      req.logIn(user, function(err) {
        res.redirect('/guesswho' );
      });
    } else {
      res.render('login', {message:'Your login or password is incorrect.'});
    }
  })(req, res, next);
});


router.get('/logout', function(req,res)
{
	req.logout();
	res.redirect('/')
});








module.exports = router;








