var tabuleiro = [[], [], []];
var aux = 0;
var jogadas = 0;
var acabou = false;

recarregarPag = function () {
	window.location.reload();
}

marcar = function (x, y) {
	jogadas++;
	if (acabou) {
		alert("acabou");
		botao = document.getElementById('botao');
		botao.style.display = "block";
		return;
	}
	if(aux == 0){
		var casa = document.getElementById("c"+x+y);
		jogador = 'X';
		if(tabuleiro[x][y] != null){
			alert("Ja foi jogado aqui!")
		}else{
			casa.innerHTML = jogador;
			tabuleiro[x][y] = jogador;
			aux = 1;
		}
	}else if(aux == 1){
		var casa = document.getElementById("c"+x+y);
		jogador = 'O';
		if(tabuleiro[x][y] != null){
			alert("Ja foi jogado aqui!")
		}else{
			casa.innerHTML = jogador;
			tabuleiro[x][y] = jogador;
			aux = 0;
		}
	}
	if (jogadas == 9) {
		alert('Deu Empate!');
	}
	if (tabuleiro[0][0] == jogador && tabuleiro[0][1] == jogador && tabuleiro[0][2] == jogador ) {
		alert('Jogador "'+jogador+'" ganhou o jogo!');
	}else if (tabuleiro[1][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[1][2] == jogador ) {
		alert('Jogador "'+jogador+'" ganhou o jogo!');
	}else if (tabuleiro[2][0] == jogador && tabuleiro[2][1] == jogador && tabuleiro[2][2] == jogador ) {
		alert('Jogador "'+jogador+'" ganhou o jogo!');
	}else if (tabuleiro[0][0] == jogador && tabuleiro[1][0] == jogador && tabuleiro[2][0] == jogador ) {
		alert('Jogador "'+jogador+'" ganhou o jogo!');
	}else if (tabuleiro[0][1] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][1] == jogador ) {
		alert('Jogador "'+jogador+'" ganhou o jogo!');
	}else if (tabuleiro[0][2] == jogador && tabuleiro[1][2] == jogador && tabuleiro[2][2] == jogador ) {
		alert('Jogador "'+jogador+'" ganhou o jogo!');
	}else if (tabuleiro[0][0] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][2] == jogador ) {
		alert('Jogador "'+jogador+'" ganhou o jogo!');
	}else if (tabuleiro[0][2] == jogador && tabuleiro[1][1] == jogador && tabuleiro[2][0] == jogador ) {
		alert('Jogador "'+jogador+'" ganhou o jogo!');
	} else {
		acabou = false;
		return;
	}

	acabou = true;
}
