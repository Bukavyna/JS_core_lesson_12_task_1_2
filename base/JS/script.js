let containerNull = null;

function containerBoss(containerId) {
	if (containerNull) {
		containerNull.style.display = `none`;
		document.body.style.backgroundImage = ``;
	}

	const container = document.getElementById(containerId);
	container.style.display = (container.style.display === `grid`) ? `none` : `grid`;
	containerNull = container;
}

function backgroundBodyColor(color) {
	document.body.style.backgroundColor = color;
	document.body.style.color = "white";
	document.body.style.transition = "color 5s";
}

function backgroundBodyImage(image) {
	document.body.style.backgroundImage = `url("${image}")`;
	document.body.style.backgroundRepeat =  `no-repeat`;
	document.body.style.color = "white";
	document.body.style.transition = "color 5s";
}


