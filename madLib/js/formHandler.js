// JavaScript Document

function write(){
	
	var city = document.getElementById('city').value;
	console.log(city);
	var name = document.getElementById('name').value;
	console.log(name);
	var adjective1 = document.getElementById('adj1').value;
	console.log(adjective1);
	var adjective2 = document.getElementById('adj2').value;
	console.log(adjective2);
	var noun1 = document.getElementById('noun1').value;
	console.log(noun1);
	var noun2 = document.getElementById('noun2').value;
	console.log(noun2);
	var verb = document.getElementById('verb').value;
	console.log(verb);
	
	var direction;
	console.log(direction);
	var opposite;
	
	var emote = document.getElementById('emote').value;
	console.log(emote);
	var color = document.getElementById('color').value;
	var nounAnimal = document.getElementById('nounAnimal').value;
	console.log(nounAnimal);
	var bodyPart = document.getElementById('bodyPart').value;
	console.log(bodyPart);
	var item = document.getElementById('item').value;
	console.log(item);
	
	var image;
	
	if(document.querySelector('input[name="direction"]:checked')!=null){
    //it is checked
    direction = document.querySelector('input[name="direction"]:checked').value;
    
}
	else{    
    //it isn't checked
    direction="";
} 
	
	if (direction=="left"){
		
		opposite = "right"
		image = "<img class='img-fluid' src='images/fork.png' alt='fork'>"
	}
	else if (direction=="right"){
		
		opposite = "left"
		image = "<img class='img-fluid float-left' src='images/fork2.jpg' alt='fork'>"
	}
	else{
		opposite = "haha lol you didn't input a direction so now this story makes even less sense than it already does!"
	}
	console.log(opposite);
	
	
	
	document.getElementById('output').innerHTML = image
	document.getElementById('output').innerHTML += "<p class='output'>One day in the far off land of " + city + ", a boy named " + name + " was taking a walk through the woods. The path he trod was " + adjective1 + " and long, yet he didn’t mind; he loved the woods. As he wandered around he admired the " + noun1 + " covering the trees, while they stood as tall as a " + noun2 + ". Soon, he came across a fork in the road. Confused, he slowly " + verb + " towards it. This fork had never been here before. Unsure of what to do, he picked it up so that he could properly throw it away when he got home: he’d hate to litter. Later he encountered another fork in the road. This time he decided to take the " + direction + " path, because as his mother always said: “Two " + direction + "s always make a " + opposite + ", and " + emote + " is magic.” As he walked down the path, he noticed the trees were becoming " + color + " and disfigured. The road became less and less " + adjective1 + " and more and more " + adjective2 + ". Suddenly an enormous roaring " + nounAnimal + " came bursting through the bushes in front of " + name + ". The " + nounAnimal + " stared directly at " + name + ", with it’s " + bodyPart + " sharp as a fork. “A fork!” " + name + " thought. He pulled out the fork he found and pointed it towards the monster, ready for what could be the fight of his life. Suddenly the four tips of the fork began glowing, emitting an array of colorful lights. A " + item + " was summoned at the end of the fork, and flew towards the monster at amazing speed. The " + item + " hit the " + nounAnimal + " so hard that it was launched into the sky, flying further and further away until the boy could no longer see it. From that day forward, " + name + " kept his lucky fork with him whenever he went into the woods, just in case a " + nounAnimal + " were to attack him again.</p>"
	document.getElementById('output').innerHTML += "<p class='output'>The End</p>"
}