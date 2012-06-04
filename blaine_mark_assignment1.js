//alert("JavaScript works!");
//Mark A. Blaine
//May 31, 2012
//Deliverable 1
//Skydiving

	var parachuteopen = true;
	var currentaltitude = 2500;
	var openingaltitude = 2500;
	var canopycolor = "blue";
	var jumpteam = "Flynn\'s Flying Circus";
	
	console.log("Parachute will open: " + parachuteopen);
	console.log("My current altitude: " + currentaltitude);
	console.log("My opening altitude: " + openingaltitude);
	console.log("Color of parachute: " + canopycolor);
	console.log("People I am jumping with: " + jumpteam);
	
	if (currentaltitude > openingaltitude) {
	
		var timetoopen = (currentaltitude-openingaltitude)/1000*3;
		
		console.log("I need to open my parachute in " + timetoopen + " seconds");
		
		console.log("I guess I will keep falling with " + jumpteam);
		
		if (canopycolor === "blue") {
			
			console.log("I\'m glad I have my trusty blue parachute");
						
		} else {
			
			console.log("I didn\'t mean to grab my " + canopycolor + " parachute");
			
			console.log("I hope it opens this time");

		};
		
	} else {
		
		console.log("Time to open my " + canopycolor + " parachute");
		
		if (parachuteopen) {
		
			console.log("Now I\'ll enjoy some canopy time");
			
		} else {
			
			console.log("I need to cutaway my main canopy and deploy my reserve");
		};
		
	};