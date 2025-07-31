(function(){

    "use strict";

    		document.getElementById('convert').addEventListener('submit',function(event){
			
			event.preventDefault();
			
			var distance = parseFloat(document.getElementById('distance').value);
				var answer = document.getElementById('answer');


			if(distance){
				var conversion = (distance * 1.608344).toFixed(3) ; 
			
				answer.innerHTML = `<h2> The ${distance} miles converts to ${conversion} Kilometers <h2>`;
			}
			else{
				answer.innerHTML = '<h2> Please Provide A Number! </h2>'
			}


		});

})();