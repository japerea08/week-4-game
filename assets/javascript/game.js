//game variables
//boolean to see if Game is started
var gameStarted = false;

//boolean to see if an enemy has been selected
var enemySelected = false;

var fightersArray = [];

//contains variables for section
var sections = [];

//dynamically create images
//image array

var imgArray = ["assets/images/anakin.jpg", "assets/images/obi_wan.jpg", "assets/images/revan.jpg", 
"assets/images/vader.jpg"];

//dynamically populate
for(var i = 0; i < imgArray.length; i++){
	var charImg = $("<img>");
	var art = $("<section>");

	//adding id
	if( i == 0){
		charImg.attr("id", "Anakin");
		art.attr("id", "AnakinContainer");
		art.append("<p>Anakin Skywalker</p>");
	}
	else if( i == 1){
		charImg.attr("id", "ObiWan");
		art.attr("id", "ObiContainer");
		art.append("<p>Obi-Wan</p>");

	}
	else if(i == 2){
		charImg.attr("id", "Revan");
		art.attr("id", "RevanContainer");
		art.append("<p>Darth Revan</p>");
	}
	else{
		charImg.attr("id", "Vader");
		art.attr("id", "VaderContainer");
		art.append("<p>Darth Vader</p>");
	}

	//adding source
	charImg.attr("src", imgArray[i]);

	//add images to array
	fightersArray.push(charImg);

	//appending images
	art.append(fightersArray[i]);

	//adding power
	if( i == 0){
		art.append("<p>150</p>");
	}
	else if( i == 1){
		art.append("<p>120</p>");

	}
	else if(i == 2){
		art.append("<p>200</p>");
	}
	else{
		art.append("<p>180</p>");
	}

	//create array
	sections.push(art);

	$("#s1").append(sections[i]);
}

//attach click events to the images
$("#AnakinContainer").on("click", function(){
	console.log("Anakin")
	if(gameStarted == false){
		gameStarted = true;
		//move this picture to selection spot
		$("#s1").hide();
		$("#yourChar").append(this);

		//move other images to enemy div
		for(var i = 0; i< fightersArray.length; i++){
			//dont take anakin
			if(i != 0){
				//appending images
				sections[i].css("background-color", "red");
				$("#s2").append(sections[i]);
			}
		}
		
	}
	else if(gameStarted == true && enemySelected == false){
		enemySelected = true;
		console.log("Anakin been selected as the enemy");
		//this code will be if Anakin is an enemy
		//Anakin moves to the Defender spot
		$("#Defender").append(this);
	}

});

$("#ObiContainer").on("click", function(){
	console.log("ObiWan");

	if(gameStarted == false){
		gameStarted = true;
		//move this picture to selection spot
		$("#s1").hide();
		$("#yourChar").append(this);

		//move other images to enemy div
		for(var i = 0; i< fightersArray.length; i++){
			//dont take anakin
			if(i != 1){
				//appending images
				sections[i].css("background-color", "red");
				$("#s2").append(sections[i]);
			}
		}
		
	}
	else if(gameStarted == true && enemySelected == false){
		enemySelected = true;
		console.log("ObiWan been selected as the enemy");
		//this code will be if Anakin is an enemy
		$("#Defender").append(this);
	}

});

$("#RevanContainer").on("click", function(){
	console.log("Revan");

	if(gameStarted == false){
		gameStarted = true;
		//move this picture to selection spot
		$("#s1").hide();
		$("#yourChar").append(this);

		//move other images to enemy div
		for(var i = 0; i< fightersArray.length; i++){
			//dont take anakin
			if(i != 2){
				//appending images
				sections[i].css("background-color", "red");
				$("#s2").append(sections[i]);
			}
		}
		
	}
	else if(gameStarted == true && enemySelected == false){
		console.log("Revan been selected as the enemy");
		//this code will be if Anakin is an enemy
		enemySelected = true;
		$("#Defender").append(this);
	}

});

$("#VaderContainer").on("click", function(){
	console.log("Vader");

	if(gameStarted == false){
		gameStarted = true;
		//move this picture to selection spot
		$("#s1").hide();
		$("#yourChar").append(this);

		//move other images to enemy div
		for(var i = 0; i< fightersArray.length; i++){
			//dont take anakin
			if(i != 3){
				//appending images
				sections[i].css("background-color", "red");
				$("#s2").append(sections[i]);
			}
		}
		
	}
	else if(gameStarted == true && enemySelected == false){
		enemySelected = true;
		console.log("Vader been selected as the enemy");
		//this code will be if Anakin is an enemy
		$("#Defender").append(this);
	}

});



