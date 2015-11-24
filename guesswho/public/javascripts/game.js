function doubleArr (arr) {

	var doubleArr = [];
	var dArrIndex = 0;
	
	for (var i = 0; i < arr.length; i++)
	{
	
		doubleArr[dArrIndex] = arr[i];
		dArrIndex ++;
		doubleArr[dArrIndex] = arr[i];
		dArrIndex ++;
	
	}
	
	return doubleArr;

}

function addBoard(symbols)
{
	var game = document.getElementById('game');
	
	var htmlString = '';
	
	for (var i =0; i < symbols.length; i++)
	{
		htmlString += '<button class="floating-box">' + symbols[i] + '</button>';
	}
	
	game.innerHTML = htmlString;
	
	//BASED on the size of the array change the margin for floating box (to keep grid look)
	var elems = document.getElementsByClassName("floating-box");
	
	console.log(symbols.length);
	
	if (symbols.length == 4)
	{
		//console.log('hello');
		for(var i = 0; i < elems.length; i++) {
    		elems[i].style.margin = '140px';
		}
	}
	
	
}

function randomizeCards(oldCards)
{
	var randCard = [];
	var rcIndex = 0;
	
	//console.log(oldCards);
	
	while (oldCards.length > 0)
	{
		console.log(oldCards);
		
		var randIndex = Math.floor(Math.random()*oldCards.length);
		console.log(randIndex);
		
		var myNewCard = oldCards[randIndex];
		oldCards.splice(randIndex, 1);
		randCard[rcIndex] = myNewCard;
		rcIndex++;
	
	}	


	return randCard;
}

function createCards()
{
	//create the array to be returned
	var cards = [];
	var cardsIndex = 0;

	//create the images and their attributes. then add them to the array
	var aryaImg = new Image();
	aryaImg.src = "images/arya.png";
	var cardArya = {name:"arya", image:aryaImg};

	cards[cardsIndex] = cardArya;
	cardsIndex++;

	var brienneImg = new Image();
	brienneImg.src = "images/brienne.png";
	var cardBrienne = {name:"brienne", image:brienneImg};

	cards[cardsIndex] = cardBrienne;
	cardsIndex++;

	
	var cersieImg = new Image();
	cersieImg.src = "images/cersie.png";
	var cardcersie = {name:"cersie", image:cersieImg};

	cards[cardsIndex] = cardcersie;
	cardsIndex++;
	
	var jamieImg = new Image();
	jamieImg.src = "images/jamie.png";
	var cardjamie = {name:"jamie", image:jamieImg};

	cards[cardsIndex] = cardjamie;
	cardsIndex++;
	
	
	var joffreyImg = new Image();
	joffreyImg.src = "images/joffrey.png";
	var cardjoffrey = {name:"joffrey", image:joffreyImg};

	cards[cardsIndex] = cardjoffrey;
	cardsIndex++;
	
	
	var johnsnowImg = new Image();
	johnsnowImg.src = "images/johnsnow.png";
	var cardjohnsnow = {name:"johnsnow", image:johnsnowImg};

	cards[cardsIndex] = cardjohnsnow;
	cardsIndex++;
	
	
	var kalImg = new Image();
	kalImg.src = "images/kal.png";
	var cardkal = {name:"kal", image:kalImg};

	cards[cardsIndex] = cardkal;
	cardsIndex++;
	
	
	var khaleesiImg = new Image();
	khaleesiImg.src = "images/khaleesi.png";
	var cardkhaleesi = {name:"khaleesi", image:khaleesiImg};

	cards[cardsIndex] = cardkhaleesi;
	cardsIndex++;
	
	
	var margeryImg = new Image();
	margeryImg.src = "images/margery.png";
	var cardmargery = {name:"margery", image:margeryImg};

	cards[cardsIndex] = cardmargery;
	cardsIndex++;
	
	
	var robbImg = new Image();
	robbImg.src = "images/robb.png";
	var cardrobb = {name:"robb", image:robbImg};

	cards[cardsIndex] = cardrobb;
	cardsIndex++;
	
	
	var tyrionImg = new Image();
	tyrionImg.src = "images/tyrion.png";
	var cardtyrion = {name:"tyrion", image:tyrionImg};

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
	
	/*for(var i = 0; i<cardsUser.length;i++)
	{
		console.log("image: " + cardsUser[i].image.src);
	}	
	*/
	//get cpu cards
	cardsCpu = createCards();
	
	//display user cards
	addUserBoard(cardsUser);
	
	
	//display cpu cards
	addCpuBoard(cardsCpu);


}

function guess()
{
	
	var x = document.getElementById("houseList").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
	console.log('you slected : ' + x);
}




var button = document.getElementById('startButton');
button.addEventListener('click', handleClick);

var guessButton = document.getElementById('guessButton');
guessButton.addEventListener('click', guess);






