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

![Alt text](https://github.com/nyu-csci-ua-0480-002-fall-2015/mss619-final-project/blob/master/img/wireframe.JPG?raw=true "Wireframe")




