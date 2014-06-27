var circulo = function () {
	var circulo = document.getElementById('circulo');
	var conteudo = document.getElementById('conteudo');
	var fundo = document.getElementById('fundo_modal');
	circulo.style.bottom = '-100px'
	conteudo.style.bottom = '0px'
	fundo_modal.style.display = 'block'
}
var conteudo = function () {
	var circulo = document.getElementById('circulo');
	var conteudo = document.getElementById('conteudo');
	var fundo = document.getElementById('fundo_modal');
	circulo.style.bottom = '';
	conteudo.style.bottom = '';
	fundo_modal.style.display = '';
}