
	var options = [
		{
			question: 'What year was the NFL started?',
			choice: ['A.1963','B.2001','C.1975','D.1920'],
			answer:'1920'
	
		},
		{
			question: 'Which team has the most Super Bowl wins?',
			choice:   ['A.New England Patriots','B.Pittsburgh Steelers','C.San Francisco 49ers','D.Dallas Cowboys'],
			answer: 'Pittsburgh Steelers'
			
		},
		{
			question:'Which quarterback has the most passing yards?',
			choice: ['A.John Elway','B.Tom Brady','C.Drew Brees','D.Dan Marino'],
			answer:'Drew Brees'
		},
		{
			question:'Which running back has the most rushing yards?',
			choice: ['A.Walter Payton','B.Barry Sanders','C.Emmit Smith','D.Reggie Bush'],
			answer:'Emmit Smith'
		},
		{
			question:'What is the longest kicked field goal?',
			choice: ['A.64 Yards','B.90 Yards','C.52 Yards','D.40 Yards'],
			answer: '64'
		},
		{
			question:'Who won the 2004 Super Bowl?',
			choice: ['A.New York Jets','B.New  England Patriots','C.Detroit Lions','D.Baltimore Ravens'],
			answer:'New England Patriots'
		},
		{
			question:'Where was the NFl started?',
			choice: ['A.Seattle, Washington','B.Maui, Hawaii ','C.Houston, Texas','D.Canton, Ohio'],
			answer:'Canton, Ohio'
		},
		{
			question:'Which defensive player has the most interceptions?',
			choice: ['A.Paul Krause','B.Ed Reed','C.Ronnie Lott','D.Charles Woodson'],
			answer:'Paul Krause'
		},
		{
			question:'Which team has never won the Super Bowl?',
			choice: ['A.Seattle Seahawks','B.New York Giants','C.Atlanta Falcons','D.Tampa Bay Buccaneers'],
			answer:'Atlanta Falcons'
		},
		{
			question:'Which team moved from St.Louis to Los Angeles?',
			choice: ['A.Titans','B.Chargers','C.Rams','D.Jets'],
			answer:'Rams'
		},
	];
	
	var correctCount = 0;
	var wrongCount = 0;
	var unanswerCount = 0;
	var timer = 20;
	var intervalId;
	var userGuess ="";
	var running = false;
	var qCount = options.length;
	var pick;
	var index;
	var holder = [];
	
	
	
	$("#reset").hide();

	$("#start").on("click", function () {
			$("#start").hide();
			displayQuestion();
			runTimer();
			for(var i = 0; i < options.length; i++) {
		holder.push(options[i]);
	}
		})
	
	function runTimer(){
		if (!running) {
		intervalId = setInterval(decrement, 1000); 
		running = true;
		}
	}
	
	function decrement() {
		$("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
		timer --;
	
		
		if (timer === 0) {
			unanswerCount++;
			stop();
			$("#answerblock").html("<p>Time is up! The correct answer is " + pick.answer + "</p>");
			hidepicture();

		}	
	}
	

	function stop() {
		running = false;
		clearInterval(intervalId);
	}
	
	function displayQuestion() {
		
		index = Math.floor(Math.random()*options.length);
		pick = options[index];
	
	
			$("#questionblock").html("<h2>" + pick.question + "</h2>");

				for(var i = 0; i < pick.choice.length; i++) {
					
				var userChoice = $("<div>");
				userChoice.addClass("answerchoice");
				userChoice.html(pick.choice[i]);
				r

				userChoice.attr("data-guessvalue", pick.choice[i]);
				$("#answerblock").append(userChoice);
	}
	
	
	

	$(".answerchoice").on("click", function () {
		s
		userGuess = $(this).attr("data-guessvalue");
	
		
		if (userGuess === pick.answer) {
			stop();
			correctCount++;
			userGuess="";
			$("#answerblock").html("<p>Correct!</p>");
			hidepicture();
			
	
		} else {
			stop();
			wrongCount++;
			userGuess="";
			$("#answerblock").html("<p>Wrong! The answer is " + pick.answer + ".</p>");
			hidepicture();
		}
		console.log('UserGuess',userGuess)
		console.log('Pick.answer',pick.answer)
	})
	}
	
	
	function hidepicture () {
	
	
		var hidpic = setTimeout(function() {
			$("#answerblock").empty();
			timer= 20;
	
		if ((wrongCount + correctCount + unanswerCount) === qCount) {
			$("#questionblock").empty();
			$("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
			$("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
			$("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
			$("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
			$("#reset").show();
			correctCount = 0;
			wrongCount = 0;
			unanswerCount = 0;
	
		} else {
			runTimer();
			displayQuestion();
	
		}
		}, 3000);
	
	
	}
	
	$("#reset").on("click", function() {
		$("#reset").hide();
		$("#answerblock").empty();
		$("#questionblock").empty();

		for(var i = 0; i < holder.length; i++) {
			options.push(holder[i]);
		}

		runTimer();

		displayQuestion();
	
	})
	
	
	