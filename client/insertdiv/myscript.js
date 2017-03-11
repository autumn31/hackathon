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
	$('.guests').append($el);
	$el.append("<canvas id=\"Chart\" ></canvas>");
})();

//draw test
(function(){ 
	
	var data = xx;
	var ctx = $('#Chart');
	var myChart = new Chart(ctx,{
	    type: 'bar',
	    data: {
	        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	        datasets: [{
	            label: '# of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
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