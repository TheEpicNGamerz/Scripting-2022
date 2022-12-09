// JavaScript Document

var character = {
	
	name:"",
	
	face:"",
	hair:"",
	shirt:"",
	leggings:"",
	background:""
	
};

function setName(){
	
	character.name = document.getElementById('name').value;
	document.getElementById('output').innerHTML = "<h2>" + character.name + "</h2>";
}


function setFace(change){
	character.face = change;
	buildBody();
	
}
function setHair(change){
	character.hair = change;
	buildBody();
	
}
function setShirt(change){
	character.shirt = change;
	buildBody();
	
}
function setLegs(change){
	character.leggings = change;
	buildBody();
	
}
function setBack(change){
	character.background = change;
	buildBody();
	
}

function buildBody(){
	
	if(character.face!=""){

		document.getElementById('face').innerHTML = "<img class='img-fluid' src='images/"+ character.face + "' alt='Face?'>";

	}
	if(character.hair!=""){

		document.getElementById('hair').innerHTML = "<img class='img-fluid' src= 'images/"+ character.hair + "' alt='Hair?'>";

	}
	if(character.shirt!=""){

		document.getElementById('shirt').innerHTML = "<img class='img-fluid' src= 'images/"+ character.shirt + "' alt='Shirt?'>";

	}
	if(character.leggings!=""){

		document.getElementById('leggings').innerHTML = "<img class='img-fluid' src= 'images/"+ character.leggings + "' alt='Legs?'>";

	}
	if(character.background!=""){

		document.getElementById('background').innerHTML = "<img class='img-fluid' src= 'images/"+ character.background + "' alt='Background?'>";

	}
}