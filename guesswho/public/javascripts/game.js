
function createCards()
{
	//create the array to be returned
	var cards = [];
	var cardsIndex = 0;

	//create the images and their attributes. then add them to the array
	var aryaImg = new Image();
	aryaImg.src = "images/arya.png";
	var cardArya = {name:"arya", image:aryaImg, house:"stark", gender:"f", claim:"n", alive:"y", hair:"brunette"};

	cards[cardsIndex] = cardArya;
	cardsIndex++;

	var brienneImg = new Image();
	brienneImg.src = "images/brienne.png";
	var cardBrienne = {name:"brienne", image:brienneImg, house:"none", gender:"f", claim:"n", alive:"y", hair:"blonde"};

	cards[cardsIndex] = cardBrienne;
	cardsIndex++;

	
	var cersieImg = new Image();
	cersieImg.src = "images/cersie.png";
	var cardcersie = {name:"cersie", image:cersieImg, house:"lanister", gender:"f", claim:"n", alive:"y", hair:"blonde"};

	cards[cardsIndex] = cardcersie;
	cardsIndex++;
	
	var jamieImg = new Image();
	jamieImg.src = "images/jamie.png";
	var cardjamie = {name:"jamie", image:jamieImg, house:"lanister", gender:"m", claim:"n", alive:"y", hair:"blonde"};

	cards[cardsIndex] = cardjamie;
	cardsIndex++;
	
	
	var joffreyImg = new Image();
	joffreyImg.src = "images/joffrey.png";
	var cardjoffrey = {name:"joffrey", image:joffreyImg, house:"lanister", gender:"m", claim:"y", alive:"n", hair:"blonde"};

	cards[cardsIndex] = cardjoffrey;
	cardsIndex++;
	
	
	var johnsnowImg = new Image();
	johnsnowImg.src = "images/johnsnow.png";
	var cardjohnsnow = {name:"johnsnow", image:johnsnowImg, house:"stark", gender:"m", claim:"n", alive:"n", hair:"brunette"};

	cards[cardsIndex] = cardjohnsnow;
	cardsIndex++;
	
	
	var kalImg = new Image();
	kalImg.src = "images/kal.png";
	var cardkal = {name:"kal", image:kalImg, house:"none", gender:"m", claim:"n", alive:"n", hair:"brunette"};

	cards[cardsIndex] = cardkal;
	cardsIndex++;
	
	
	var khaleesiImg = new Image();
	khaleesiImg.src = "images/khaleesi.png";
	var cardkhaleesi = {name:"khaleesi", image:khaleesiImg, house:"targaryan", gender:"f", claim:"y", alive:"y", hair:"blonde"};

	cards[cardsIndex] = cardkhaleesi;
	cardsIndex++;
	
	
	var margeryImg = new Image();
	margeryImg.src = "images/margery.png";
	var cardmargery = {name:"margery", image:margeryImg, house:"tyrell", gender:"f", claim:"n", alive:"y", hair:"brunette"};

	cards[cardsIndex] = cardmargery;
	cardsIndex++;
	
	
	var robbImg = new Image();
	robbImg.src = "images/robb.png";
	var cardrobb = {name:"robb", image:robbImg, house:"stark", gender:"m", claim:"y", alive:"n", hair:"brunette"};

	cards[cardsIndex] = cardrobb;
	cardsIndex++;
	
	
	var tyrionImg = new Image();
	tyrionImg.src = "images/tyrion.png";
	var cardtyrion = {name:"tyrion", image:tyrionImg, house:"lanister", gender:"m", claim:"n", alive:"y", hair:"blonde"};

	cards[cardsIndex] = cardtyrion;
	cardsIndex++;


	return cards;
}

function addUserBoard(cards)
{

	var userBoard = document.getElementById('playerBoard');
	
	var htmlString = '';
	
	for (var i =0; i < cards.length; i++)
	{
		htmlString += '<img src="' + cards[i].image.src + '" class="floating-box">        </img>';
	}
	
	userBoard.innerHTML = htmlString;
	
	
	//if its in the second row then increase the space margin
	var elems = document.getElementsByClassName("floating-box");
	
	elems[6].style.marginLeft = '110px';

}

function addCpuBoard(cards)
{

	var cpuBoard = document.getElementById('cpuBoard');
	
	var htmlString = '';
	
	for (var i =0; i < cards.length; i++)
	{
		htmlString += '<img src="' + cards[i].image.src + '" class="floating-box-cpu">        </img>';
	}
	
	cpuBoard.innerHTML = htmlString;
	
	
	//if its in the second row then increase the space margin
	//also push first one all the way to left of screen
	var elems = document.getElementsByClassName("floating-box-cpu");
	
	elems[0].style.marginLeft = '750px';
	elems[6].style.marginLeft = '790px';

}

function handleClick(event) {


	//do guess who stuff
	
	
	//create the cards
	//add attributes to the cards
	//get user cards
	cardsUser = createCards();
	
	//get cpu cards
	cardsCpu = createCards();
	
	//display user cards
	addUserBoard(cardsUser);
	
	
	//display cpu cards
	addCpuBoard(cardsCpu);


}

//handle guesses
function guessMyth()
{
	
	var question = document.getElementById("houseList").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
	console.log('you slected : ' + question);
	
	//get the users cards
	var cards = document.getElementsByClassName("floating-box");
	
	console.log(cards[0]);
	
	//update the card based on the question
	//check if its a claim to the throne question
	if(question == 'claim')
	{
		//find out if user person has made a claim to the thrown
		var upClaim = userPerson.claim;
		
		console.log('question: ' + question + ' upHouse: ' + upClaim);
		
		//if yes then delete all not alive
		if(upClaim == 'y')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('y' != cardsUser[i].claim)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('y' == cardsUser[i].claim)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	//check if they are alive
	if(question == 'alive')
	{
		//find out if user persons alive
		var upAlive = userPerson.alive;
		
		console.log('question: ' + question + ' upHouse: ' + upAlive);
		
		//if yes then delete all not alive
		if(upAlive == 'y')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('y' != cardsUser[i].alive)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('y' == cardsUser[i].alive)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	//otherwise its a house question
	else
	{	
		//find out user persons house
		var upHouse = userPerson.house;
		
		console.log('question: ' + question + ' upHouse: ' + upHouse);
		
		//if yes then delete all none this house
		if(upHouse == question)
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if(question != cardsUser[i].house)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if(question == cardsUser[i].house)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	
		
	}
	
	//check win
	checkWin();
	
	
	
}

function guessAppearance()
{
	
	var question = document.getElementById("appearance").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
	console.log('you slected : ' + question);
	
	//get the users cards
	var cards = document.getElementsByClassName("floating-box");
	
	console.log(cards[0]);
	
	//update the card based on the question
	//check if its a claim to the throne question
	if(question == 'm')
	{
		//find out if user person is male
		var upGender = userPerson.gender;
		
		console.log('question: ' + question + ' upHouse: ' + upGender);
		
		//if yes then delete all not alive
		if(upGender == 'm')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('m' != cardsUser[i].gender)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('m' == cardsUser[i].gender)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	else if(question == 'f')
	{
		//find out if user person is male
		var upGender = userPerson.gender;
		
		console.log('question: ' + question + ' upHouse: ' + upGender);
		
		//if yes then delete all not alive
		if(upGender == 'f')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('f' != cardsUser[i].gender)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('f' == cardsUser[i].gender)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	//hair
	else if(question == 'blonde')
	{
		//find out if user person is male
		var upHair = userPerson.hair;
		
		console.log('question: ' + question + ' upHouse: ' + upHair);
		
		//if yes then delete all not alive
		if(upHair == 'blonde')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('blonde' != cardsUser[i].hair)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('blonde' == cardsUser[i].hair)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	else if(question == 'brunette')
	{
		//find out if user person is male
		var upHair = userPerson.hair;
		
		console.log('question: ' + question + ' upHouse: ' + upHair);
		
		//if yes then delete all not alive
		if(upHair == 'brunette')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('brunette' != cardsUser[i].hair)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('brunette' == cardsUser[i].hair)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	
	//check win
	checkWin();
	
	
}

function guessPerson()
{
	
	var question = document.getElementById("personGuess").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
	console.log('you slected : ' + question);
	
	//get the users cards
	var cards = document.getElementsByClassName("floating-box");
	
	if(userPerson.name == question)
	{
		console.log("you win");
		youWin();
	}
	else
	{
		for(var i = 0; i < cards.length; i++)
		{
			//check the cards value
			if(question == cardsUser[i].name)
			{
				cards[i].style.visibility = "hidden";
			}
		}
	}
	
	//check win
	checkWin();
	
	
}

function cpuTurn()
{

	//choose a question 
	//first get all the question
	var possibleQs = document.getElementsByTagName("option");
		
	//pick a random question
	var cpuQIndex = Math.floor((Math.random()*possibleQs.length));
	var cpuQ = possibleQs[cpuQIndex].value;
	
	console.log('cpu question: ' + cpuQ);

	
	//let user know whats going on
	
	
	
	//change the cpu board based on the question
	handleCpuGuess(cpuQ);
	
	
	//update the user on what CPU did
	var displayText = document.getElementById('textForUser');
	displayText.innerText = "CPU Question: " + possibleQs[cpuQIndex].innerText;
	
	
	//check if CPU Won
	checkLose();
}

function handleCpuGuess(question)
{
	//get the cpu cards
	var cards = document.getElementsByClassName("floating-box-cpu");

	if(question == 'm')
	{
		//find out if user person is male
		var upGender = cpuPerson.gender;
		
		//console.log('question: ' + question + ' upHouse: ' + upGender);
		
		//if yes then delete all not alive
		if(upGender == 'm')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('m' != cardsCpu[i].gender)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('m' == cardsCpu[i].gender)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	else if(question == 'f')
	{
		//find out if user person is male
		var upGender = cpuPerson.gender;
		
		console.log('question: ' + question + ' upHouse: ' + upGender);
		
		//if yes then delete all not alive
		if(upGender == 'f')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('f' != cardsCpu[i].gender)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('f' == cardsCpu[i].gender)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	//hair
	else if(question == 'blonde')
	{
		//find out if user person is male
		var upHair = cpuPerson.hair;
		
		console.log('question: ' + question + ' upHouse: ' + upHair);
		
		//if yes then delete all not alive
		if(upHair == 'blonde')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('blonde' != cardsCpu[i].hair)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('blonde' == cardsCpu[i].hair)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	else if(question == 'brunette')
	{
		//find out if user person is male
		var upHair = cpuPerson.hair;
		
		//console.log('question: ' + question + ' upHouse: ' + upHair);
		
		//if yes then delete all not alive
		if(upHair == 'brunette')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('brunette' != cardsCpu[i].hair)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('brunette' == cardsCpu[i].hair)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	
	else if(question == 'claim')
	{
		//find out if user person has made a claim to the thrown
		var upClaim = cpuPerson.claim;
		
		console.log('question: ' + question + ' upHouse: ' + upClaim);
		
		//if yes then delete all not alive
		if(upClaim == 'y')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('y' != cardsCpu[i].claim)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('y' == cardsCpu[i].claim)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	//check if they are alive
	if(question == 'alive')
	{
		//find out if user persons alive
		var upAlive = cpuPerson.alive;
		
		console.log('question: ' + question + ' upHouse: ' + upAlive);
		
		//if yes then delete all not alive
		if(upAlive == 'y')
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('y' != cardsCpu[i].alive)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
		else
		{
			for(var i = 0; i < cards.length; i++)
			{
				//check the cards value
				if('y' == cardsCpu[i].alive)
				{
					console.log("match");
					cards[i].style.visibility = "hidden";
				}
			}
		}
	}
	
	else 
	{
	
		//find out cpu persons house
		var cpupHouse = cpuPerson.house;
		
		//check if its a house
		var isHouse = false;
		
		console.log("cpuhose: " + cpupHouse + " question: " + question);
		
		for(var i =0; i < cards.length; i++)
		{
			if(question == cardsCpu[i].house)
			{
				isHouse = true;
			}
		
		}
		console.log(isHouse);
		//if it is a house then do house stuff
		if(isHouse)
		{
			//if yes then delete all none this house
			if(cpupHouse == question)
			{
				for(var i = 0; i < cards.length; i++)
				{
					//check the cards value
					if(question != cardsCpu[i].house)
					{
						console.log("match");
						cards[i].style.visibility = "hidden";
					}
				}
			}
			else
			{
				for(var i = 0; i < cards.length; i++)
				{
					//check the cards value
					if(question == cardsCpu[i].house)
					{
						console.log("match");
						cards[i].style.visibility = "hidden";
					}
				}
			}
		}
		//otherwise do person stuff
		else
		{
		
			if(cpuPerson.name == question)
			{
				console.log("CPU win");
				//youWin();
			}
			else
			{
				for(var i = 0; i < cards.length; i++)
				{
					//check the cards value
					if(question == cardsCpu[i].name)
					{
						cards[i].style.visibility = "hidden";
					}
				}
			}
		
		}		
	
	}	




}

function checkWin()
{

	//incremet turns taken
	var pGuess = document.getElementsByTagName('p')[0];
	console.log("guesses: " + pGuess.textContent);
	var guessStr =  pGuess.textContent;
	var guessUpdate = guessStr.substring(guessStr.length - 2, guessStr.length);
	console.log("gues num: " + guessUpdate);
	guessUpdate = Number(guessUpdate) + 1;
	pGuess.innerHTML =  "Turns taken: " + guessUpdate;

	var cards = document.getElementsByClassName("floating-box");
	
	//keep track of remaining cards
	var visibleCards = 0;
	
	for(var i = 0; i < cards.length; i++)
	{
		//check the cards value
		if(cards[i].style.visibility != "hidden")
		{
			visibleCards++;
		}
	}

	//if only one card left than user wins
	if(visibleCards == 1)
	{
		//you win
		youWin();
	}
	else
	{
		//cpu turn
		cpuTurn();
	}

}

function checkLose()
{
	var cards = document.getElementsByClassName("floating-box-cpu");
	
	//keep track of remaining cards
	var visibleCards = 0;
	
	for(var i = 0; i < cards.length; i++)
	{
		//check the cards value
		if(cards[i].style.visibility != "hidden")
		{
			visibleCards++;
		}
	}

	//if only one card left than user loses
	if(visibleCards == 1)
	{
		//you win
		youLose();
	}

}

function youWin()
{

	console.log("you a winner");
	window.location.href = '/win';

}

function youLose()
{

	console.log("you a loser");
	window.location.href = '/lose';

}

//create the cards
//add attributes to the cards
//get user cards
var cardsUser = createCards();

//get user person
var userPersonIndex = Math.floor((Math.random()*cardsUser.length));
var userPerson = cardsUser[userPersonIndex];

console.log(userPerson);
	
//get cpu cards
var cardsCpu = createCards();

//get CPU person
var cpuPersonIndex = Math.floor((Math.random()*cardsCpu.length));
var cpuPerson = cardsCpu[cpuPersonIndex];
	
//display user cards
addUserBoard(cardsUser);
	
//display cpu cards
addCpuBoard(cardsCpu);


//var button = document.getElementById('startButton');
//button.addEventListener('click', handleClick);

var guessButtonMyth = document.getElementById('guessButtonMyth');
guessButtonMyth.addEventListener('click', guessMyth);

var guessButtonAppearance = document.getElementById('guessButtonAppearance');
guessButtonAppearance.addEventListener('click', guessAppearance);

var guessButtonPerson = document.getElementById('guessButtonPerson');
guessButtonPerson.addEventListener('click', guessPerson);






