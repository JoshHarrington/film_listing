let currentNum;
let oldNum;

function radioClick(myRadio) {
	oldNum = currentNum;
	currentNum = myRadio.getAttribute('data-number');

	let oldFilmPick = document.getElementsByClassName('film_'+oldNum)[0];
	let firstFilmPick = document.getElementsByClassName('film_0')[0];
	let currentFilmPick = document.getElementsByClassName('film_'+currentNum)[0];

	let oldFilmPickLabel = document.getElementsByClassName('filmPickerLabel_'+oldNum)[0];
	let firstFilmPickLabel = document.getElementsByClassName('filmPickerLabel_0')[0];
	let currentFilmPickLabel = document.getElementsByClassName('filmPickerLabel_'+currentNum)[0];


	if (currentNum !== oldNum) {
		//// only run if the film changes
		if (oldNum){
			oldFilmPick.setAttribute('hidden', '');
			oldFilmPick.classList.remove('show');
			oldFilmPick.classList.add('hide');

			oldFilmPickLabel.classList.remove('highlight');
		} else {
			firstFilmPick.setAttribute('hidden', '');
			firstFilmPick.classList.remove('show');
			firstFilmPick.classList.add('hide');

			firstFilmPickLabel.classList.remove('highlight');
		}
		currentFilmPick.removeAttribute('hidden');
		currentFilmPick.classList.remove('hide');
		currentFilmPick.classList.add('show');

		currentFilmPickLabel.classList.add('highlight');
	}
}
