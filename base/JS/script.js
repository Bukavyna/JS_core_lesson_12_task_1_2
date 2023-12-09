//Фон BODY!

// let containerNull = null;
//
// function containerBoss(containerId) {
// 	if (containerNull) {
// 		containerNull.style.display = `none`;
// 		document.body.style.backgroundImage = ``;
// 	}
//
// 	const container = document.getElementById(containerId);
// 	container.style.display = (container.style.display === `grid`) ? `none` : `grid`;
// 	containerNull = container;
// }
//
// function backgroundBodyColor(color) {
// 	document.body.style.backgroundColor = color;
// 	document.body.style.color = "white";
// 	document.body.style.transition = "color 5s";
// }
//
// function backgroundBodyImage(image) {
// 	document.body.style.backgroundImage = `url("${image}")`;
// 	document.body.style.backgroundRepeat =  `no-repeat`;
// 	document.body.style.color = "white";
// 	document.body.style.transition = "color 5s";
// }


//Віртуальна клавіатура!!

let capsLock = false;
let shiftPressed = false;

function handleKeyPress(key) {
	let char = key;
	let output = document.getElementById(`output`);

	if (key === 'Tab') {
		char = '\t';
	}
	else if (key === 'Enter') {
		char = '\n';
	}
	else if (key === 'CapsLock') {
		capsLock = !capsLock;
		return;
	}
	else if (key === 'Shift') {
		shiftPressed = true;
		return;
	}
	else if (key === 'Backspace') {
		const currentText = output.value;
		output.value = currentText.slice(0, -1);
		return;
	}

	else if (capsLock || shiftPressed) {
		char = char.toUpperCase();
	}

	else if (key === 'Bla') {
		char += " ";
		return;
	}

	output.value += char;
}

document.addEventListener('keydown', function (event) {
	const key = event.key;
	handleKeyPress(key);
});

document.addEventListener('keyup', function (event) {
	const key = event.key;

	if (key === 'Shift') {
		shiftPressed = false;
	}
});

document.addEventListener('keydown', function (event) {

	const key = event.key;
	const buttons = document.querySelectorAll(`.key[data-key="${key.toUpperCase()}"]`);

	Array.from(buttons).forEach(button => {
		button.classList.add('pressed');
	});

	const outputDiv = document.getElementById(`output`);
	outputDiv.innerText = key;
});

document.addEventListener('keyup', function (event) {

	const key = event.key;
	const buttons = document.querySelectorAll(`.key[data-key="${key.toUpperCase()}"]`);

	Array.from(buttons).forEach(button => {
		button.classList.remove('pressed');
	});
});
