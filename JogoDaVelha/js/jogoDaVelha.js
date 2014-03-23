var tabuleiro = [[], [], []];
var aux = 0;
var jogadas = 0;
var acabou = false;
result = document.getElementById('result');
veri = 0;

recarregarPag = function () {
	window.location.reload();
}

robo = function  () {
	x = Math.floor((Math.random()*3));
	y = Math.floor((Math.random()*3));

	var casa = document.getElementById("c"+x+y);
		jogador = 'O';

	if(tabuleiro[x][y] != null){
		robo();
	}else{
		casa.innerHTML = jogador;
		tabuleiro[x][y] = jogador;
		aux = 0;
		verificar();
	}
}

marcar = function (x, y) {
	jogadas++;
	if (acabou) {
		result.innerHTML = "Acabou!";
		botao = document.getElementById('botao');
		botao.style.display = "block";
		return;
	}
	if(aux == 0){
		var casa = document.getElementById("c"+x+y);
		jogador = 'X';

		if(tabuleiro[x][y] != null){
			result.innerHTML = 'Esse bloco ja esta marcado!';
		}else{
			casa.innerHTML = jogador;
			tabuleiro[x][y] = jogador;
			aux = 1;
			verificar();
			if(veri == 0){
				marcar();
			}
		}
	}else if(aux == 1){
		robo();
	}
}

verificar = function  () {
	if (jogadas == 9) {
		result.innerHTML = 'Deu Empate!';
		veri = 1;
	}
	if (tabuleiro[0][0] == jogador && tabuleiro[0][1] == jogador && tabuleiro[0][2] == jogador ) {
		result.innerHTML = 'Jogador "'+jogador+'" ganhou o jogo!';
		veri = 1;
	}else if (tabuleiro[1][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[1][2] == jogador ) {
		result.innerHTML = 'Jogador "'+jogador+'" ganhou o jogo!';
		veri = 1;
	}else if (tabuleiro[2][0] == jogador && tabuleiro[2][1] == jogador && tabuleiro[2][2] == jogador ) {
		result.innerHTML = 'Jogador "'+jogador+'" ganhou o jogo!';
		veri = 1;
	}else if (tabuleiro[0][0] == jogador && tabuleiro[1][0] == jogador && tabuleiro[2][0] == jogador ) {
		result.innerHTML = 'Jogador "'+jogador+'" ganhou o jogo!';
		veri = 1;
	}else if (tabuleiro[0][1] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][1] == jogador ) {
		result.innerHTML = 'Jogador "'+jogador+'" ganhou o jogo!';
		veri = 1;
	}else if (tabuleiro[0][2] == jogador && tabuleiro[1][2] == jogador && tabuleiro[2][2] == jogador ) {
		result.innerHTML = 'Jogador "'+jogador+'" ganhou o jogo!';
		veri = 1;
	}else if (tabuleiro[0][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][2] == jogador ) {
		result.innerHTML = 'Jogador "'+jogador+'" ganhou o jogo!';
		veri = 1;
	}else if (tabuleiro[0][2] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][0] == jogador ) {
		result.innerHTML = 'Jogador "'+jogador+'" ganhou o jogo!';
		veri = 1;
	} else {
		acabou = false;
		return;
	}
	acabou = true;

}