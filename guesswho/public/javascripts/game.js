
function createCards()
{
	//create the array to be returned
	var cards = [];
	var cardsIndex = 0;

	//create the images and their attributes. then add them to the array
	var aryaImg = new Image();
	aryaImg.src = "images/arya.png";
	var cardArya = {name:"arya", image:aryaImg, house:"stark", gender:"f"};

	cards[cardsIndex] = cardArya;
	cardsIndex++;

	var brienneImg = new Image();
	brienneImg.src = "images/brienne.png";
	var cardBrienne = {name:"brienne", image:brienneImg, house:"none", gender:"f"};

	cards[cardsIndex] = cardBrienne;
	cardsIndex++;

	
	var cersieImg = new Image();
	cersieImg.src = "images/cersie.png";
	var cardcersie = {name:"cersie", image:cersieImg, house:"lanister", gender:"f"};

	cards[cardsIndex] = cardcersie;
	cardsIndex++;
	
	var jamieImg = new Image();
	jamieImg.src = "images/jamie.png";
	var cardjamie = {name:"jamie", image:jamieImg, house:"lanister", gender:"m"};

	cards[cardsIndex] = cardjamie;
	cardsIndex++;
	
	
	var joffreyImg = new Image();
	joffreyImg.src = "images/joffrey.png";
	var cardjoffrey = {name:"joffrey", image:joffreyImg, house:"lanister", gender:"m"};

	cards[cardsIndex] = cardjoffrey;
	cardsIndex++;
	
	
	var johnsnowImg = new Image();
	johnsnowImg.src = "images/johnsnow.png";
	var cardjohnsnow = {name:"johnsnow", image:johnsnowImg, house:"stark", gender:"m"};

	cards[cardsIndex] = cardjohnsnow;
	cardsIndex++;
	
	
	var kalImg = new Image();
	kalImg.src = "images/kal.png";
	var cardkal = {name:"kal", image:kalImg, house:"none", gender:"m"};

	cards[cardsIndex] = cardkal;
	cardsIndex++;
	
	
	var khaleesiImg = new Image();
	khaleesiImg.src = "images/khaleesi.png";
	var cardkhaleesi = {name:"khaleesi", image:khaleesiImg, house:"targaryan", gender:"f"};

	cards[cardsIndex] = cardkhaleesi;
	cardsIndex++;
	
	
	var margeryImg = new Image();
	margeryImg.src = "images/margery.png";
	var cardmargery = {name:"margery", image:margeryImg, house:"tyrell", gender:"f"};

	cards[cardsIndex] = cardmargery;
	cardsIndex++;
	
	
	var robbImg = new Image();
	robbImg.src = "images/robb.png";
	var cardrobb = {name:"robb", image:robbImg, house:"stark", gender:"m"};

	cards[cardsIndex] = cardrobb;
	cardsIndex++;
	
	
	var tyrionImg = new Image();
	tyrionImg.src = "images/tyrion.png";
	var cardtyrion = {name:"tyrion", image:tyrionImg, house:"lanister", gender:"m"};

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

function guess()
{
	
	var x = document.getElementById("houseList").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
	console.log('you slected : ' + x);
}

function guessAppearance()
{
	
	var x = document.getElementById("appearance").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
	console.log('you slected : ' + x);
}

function guessPerson()
{
	
	var x = document.getElementById("personGuess").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
	console.log('you slected : ' + x);
}

var button = document.getElementById('startButton');
button.addEventListener('click', handleClick);

var guessButton = document.getElementById('guessButton');
guessButton.addEventListener('click', guess);

var guessButtonAppearance = document.getElementById('guessButtonAppearance');
guessButtonAppearance.addEventListener('click', guessAppearance);

var guessButtonPerson = document.getElementById('guessButtonPerson');
guessButtonPerson.addEventListener('click', guessPerson);






