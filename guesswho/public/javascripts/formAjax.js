//ajax form validation


document.addEventListener("DOMContentLoaded", function(){
	var btn = document.getElementById('btn');
	btn.addEventListener("click", function(evt){
		evt.preventDefault();
		var url = "/api/scores";
		var name = document.getElementById('name').value;
		url = url + "?name=" + name;
		var req = new XMLHttpRequest();
		req.open('GET', url, true);
		console.log('clicked');
		req.addEventListener("load", function() {
			console.log(req.responseText);
			var tbody = document.createElement('tbody');
			tbody.id = "score-list";
			JSON.parse(req.responseText).forEach(function(name) {
				var tr = tbody.appendChild(document.createElement('tr'));
				tr.appendChild(document.createElement('td')).textContent = name.username;
				tr.appendChild(document.createElement('td')).textContent = name.currentWinStreak;
				tr.appendChild(document.createElement('td')).textContent = name.bestWinStreak;
			});
			var scoreList = document.getElementById('score-list');
			scoreList.parentNode.replaceChild(tbody, scoreList);
			console.log(tbody);
		});
		req.send();
	})
});






