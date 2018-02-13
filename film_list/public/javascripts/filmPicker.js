const filePath = '../assets/films.json';

function loadJSON(callback) {   

	const xobj = new XMLHttpRequest();
				xobj.overrideMimeType("application/json");
	xobj.open('GET', filePath, true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);  
}


let currentNum;
let oldNum;

function radioClick(myRadio) {
	oldNum = currentNum;
	currentNum = myRadio.getAttribute('data-number');
	if (currentNum !== oldNum) {
		//// only run if the film changes
		loadJSON(function(response) {
			let films = JSON.parse(response);
			if (oldNum){
				let oldFilmPick = document.getElementsByClassName('film_'+oldNum)[0];
				oldFilmPick.setAttribute('hidden', '');
				oldFilmPick.classList.remove('show');
				oldFilmPick.classList.add('hide');
			} else {
				const firstFilmNum = 0;
				let firstFilmPick = document.getElementsByClassName('film_'+firstFilmNum)[0];
				firstFilmPick.setAttribute('hidden', '');
				firstFilmPick.classList.remove('show');
				firstFilmPick.classList.add('hide');
			}
			let currentFilmPick = document.getElementsByClassName('film_'+currentNum)[0];
			currentFilmPick.removeAttribute('hidden');
			currentFilmPick.classList.remove('hide');
			currentFilmPick.classList.add('show');
		})
	}
}
