# mss619-final-project
final-project created for mss619

# Guess Who? Game of Thrones edition


# Overview

Have all the fun of the Guess Who? board game on your computer browser. The computer and the user each pick one the multitude of Game of Thrones characters. They then proceed to choose questions that will help them widdle down who thier opponent has chosen. If the user figures out the computers person before the computer finds out thiers then they win. The game will also keep track of users, through a login method so they can keep track of thier high score (least amount of guesses for a win).

# Data Model

I'll have to store Users and high scores

I'll also need JSON Data for the player objects and thier attributes (for doing stuff based on the question)

```
// users
// *  site requires authentication...
// * so users have a username and password
// * they also can have a highscore
var User = new mongoose.Schema({
  // username, password provided by plugin
  highScore:  {type: Number, min: 1, required: true}
});

```

# Wireframe

![Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/mss619-final-project/blob/master/img/wireframe.png?raw=true "Wireframe")

# site map

![Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/mss619-final-project/blob/master/img/sitemap.png?raw=true "Wireframe")


# Research Topics

* (1 point) Using pre-built Express project templates
* (3 points) Integrate user authentication
* (1 point) Use a CSS framework throughout your site, use a reasonable of customization of the framework 
* (1 point) Integrate visual effects
* (2 points) Perform client side form validation using a JavaScript library




