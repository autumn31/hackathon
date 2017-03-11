(function() {
	console.log("hi, is me");
	// just place a div at top right
	var div = document.createElement('div');
	// div.style.position = 'fixed';
	// div.style.top = 0;
	// div.style.right = 0;
	// div.textContent = 'Injected!';
	// div.id = "Currency";
	// div.load("")
	// document.body.appendChild(div);
	// alert('inserted self... giggity');

	// jquery
	var $el = $('.uf_addons_container').clone();
	$el.empty();
	$('.guests').append($el);
	$el.append("<canvas id=\"Chart\" ></canvas>");
	$el.css("background-color", "#fbfbfb");
})();

//draw test
(function(){ 
	// var data = xx;
	var ctx = $('#Chart');
	var myChart = new Chart(ctx,{
	    type: 'line',
	    data: {
	        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	        datasets: [{
	        	backgroundColor: "rgba(0,0,0,0.05)",
	        	borderColor: "rgba(43,144,245,1)",
	        	pointBorderColor: "rgba(43,144,245,1)",
	        	pointBackgroundColor: "rgba(43,144,245,1)",
	            fill : false,
	            lineTension: 0,
	            data: [12, 19, 3, 5, 2, 3],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	legend: {
		        display: false
		    },
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
})();