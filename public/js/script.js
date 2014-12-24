function initialize () {
	var topo = document.getElementById('topo');
	var a_foto = document.getElementById('a_foto');
	var conteudo = document.getElementById('conteudo');

	topo.style.height = '150px';

	setTimeout(function() {
		a_foto.style.bottom = '-75px';
		a_foto.style.transform = 'rotate(360deg)';
	}, 1000);

	setTimeout(function() {
		conteudo.style.opacity = '1';
	}, 1250);
}

initialize();