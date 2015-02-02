var audio = document.getElementById('hammer');
audio.play();
audio.src('audio/hammer.mp3');
audio.play();

function savantSite (x, y) {
	var body = document.getElementsByTagName('body')[0],
		vario = document.createElement('div');

	vario.setAttribute('class', 'vario');
	vario.style.top = (y - 10) + 'px';
	vario.style.left = (x - 30) + 'px';
	body.appendChild(vario);
}

document.onmousemove = function (e) {
	savantSite(e.clientX, e.clientY);
}