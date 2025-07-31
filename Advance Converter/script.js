(function(){
    "use strict";
    

		var converttype = "miles";
		var heading = document.querySelector('h1');
		var intro = document.querySelector('p');
		var answerDiv = document.getElementById('answer');
		var form = document.getElementById('convert');

		document.addEventListener('keydown',function(event){

			var key = event.code;  //captures key
			
			if(key === 'KeyK'){
				converttype = "kilometers";
				heading.innerHTML = "Kilometers to Miles Converter";
				intro.innerHTML = "Type in number of kilometers and click the button to convert into miles";

			}
			else if(key === 'KeyM'){
				converttype = "miles";
				heading.innerHTML = "Miles to Kilometers Converter";
				intro.innerHTML = "Type in number of Miles and click the button to convert into kilometers";

			}
		});

		form.addEventListener('submit',function(event){

			event.preventDefault();

			var distance = parseFloat(document.getElementById('distance').value);

			if (distance){

				if(converttype == "miles"){
					var converted = (distance * 1.609344).toFixed(3);
					answer.innerHTML = `${distance} miles converts to ${converted} kilometers`; 
				}
				else{

					var converted = (distance * 0.621371192).toFixed(3);
					answer.innerHTML = `${distance} kilometers converts to ${converted} miles`;

				}

			}
			else{
				answer.innerHTML = "<h2> Please Provide A Number! </h2>";
			}

		});

})();