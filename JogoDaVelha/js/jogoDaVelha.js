var tabuleiro = [[], [], []];
var aux = 0;
var jogadas = 0;
var acabou = false;
var tipoJoga = 0;

result = document.getElementById('result');
veri = 0;

modalFechar = function (a) {
	var modal = document.getElementById('black');
	modal.style.display = 'none';
	tipoJoga = a;
}

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

jogar = function  (a, b, x, y) {
	var casa = document.getElementById("c"+x+y);
		jogador = b;

		if(tabuleiro[x][y] != null){
			result.innerHTML = 'Esse bloco ja esta marcado!';
		}else{
			casa.innerHTML = jogador;
			tabuleiro[x][y] = jogador;
			aux = a;
			verificar(jogador);
			if(veri == 0){
				marcar();
			}
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
		jogar(1, 'X', x, y);
	}else if(aux == 1 && tipoJoga == 0){
		robo();
	}else if(aux == 1 && tipoJoga == 1){
		jogar(0, 'O', x, y);
	}
}

verificar = function  (jogador) {
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