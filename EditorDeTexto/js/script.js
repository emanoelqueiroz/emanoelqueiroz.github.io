window.onload = function() {
	foco();
	var papel = document.getElementById("papel");
	papel.style.marginTop = '25px';
};
var foco = function () {
	document.getElementById("papel").focus();
}
var ativados = function (botao) {
	var ativ = document.getElementById(botao);
	if(ativ.style.backgroundColor == 'rgb(102, 102, 102)' || ativ.style.backgroundColor == ''){
		ativ.style.backgroundColor = '#FFF';
		ativ.style.color = '#242424';
		foco();
	}else{
		ativ.style.backgroundColor = '#242424';
		ativ.style.color = '#FFF';
		foco();
	}
}
var negrito = function () {
	document.execCommand('bold');
	ativados('negrito');
}
var italico = function () {
	document.execCommand('italic');
	ativados('italico');
}
var sublinhado = function () {
	document.execCommand('underline');
	ativados('sublinhado');
}
var editorFonte = function (fontName) {
    document.execCommand("fontName", false, fontName);
    var papel = document.getElementById('papel');
    papel.style.fontFamily = fontName;
    foco();
}
var smallCaps = function () {
	var papel = document.getElementById('papel');
	if(papel.style.fontVariant == 'small-caps'){
		papel.style.fontVariant = 'normal';
		ativados('smallCaps');
	}else{
		papel.style.fontVariant = 'small-caps';
		ativados('smallCaps');
	}
}
window.onkeydown = function(event) {
   if (event.keyCode == 9) {
   		this.value += "    ";
    	return false;
   }
}