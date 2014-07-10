(function() {
   var conteudo = document.getElementById('conteudo');
	tamanho = window.innerHeight;
	if(tamanho > 600){
		conteudo.style.bottom = '-'+tamanho+'px';
		conteudo.style.marginBottom = tamanho / 2 + 'px';
	}else{
		conteudo.style.bottom = '-600px';
		conteudo.style.marginBottom = '100px';
	}
})();
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
	tamanho = window.innerHeight;
	circulo.style.bottom = '';
	if(tamanho > 600){
		conteudo.style.bottom = '-'+tamanho+'px';
	}else{
		conteudo.style.bottom = '-600px';
	}
	fundo_modal.style.display = '';
}