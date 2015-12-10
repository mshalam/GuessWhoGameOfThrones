//ajax form validation


document.addEventListener("DOMContentLoaded", function(){
	var btn = document.getElementById('btn');
	btn.addEventListener("click", function(evt){
		evt.preventDefault();
		var url = "/api/scores";
		var director = document.getElementById('director').value;
		url = url + "?director=" + director;
		var req = new XMLHttpRequest();
		req.open('GET', url, true);
		console.log('clicked');
		req.addEventListener("load", function() {
			console.log(req.responseText);
			var tbody = document.createElement('tbody');
			tbody.id = "movie-list";
			JSON.parse(req.responseText).forEach(function(movie) {
				var tr = tbody.appendChild(document.createElement('tr'));
				tr.appendChild(document.createElement('td')).textContent = movie.title;
				tr.appendChild(document.createElement('td')).textContent = movie.director;
				tr.appendChild(document.createElement('td')).textContent = movie.year;
			});
			var movieList = document.getElementById('movie-list');
			//movieList.parentNode.replaceChild(tbody, movieList);
			console.log(tbody);
		});
		req.send();
	})
});

