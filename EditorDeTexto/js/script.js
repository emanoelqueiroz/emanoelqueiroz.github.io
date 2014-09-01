;(function() {
	'use strict';

	var  self = {}, 
		_self = {};

		_self.elements = {
			papel : document.getElementById("papel"),
			negrito : document.getElementById("negrito"),
			italico : document.getElementById("italico"),
			sublinhado : document.getElementById("sublinhado"),
			containerAlinhamento : document.getElementById('container-alinhamento') 
		};

		_self.foco = function() {
			_self.elements.papel.focus();
		}

		_self.ativados = function(id) {
			var ativ = document.getElementById(id);
			if(ativ.style.backgroundColor == 'rgb(36, 36, 36)' || ativ.style.backgroundColor == ''){
				ativ.style.backgroundColor = '#FFF';
				ativ.style.color = '#242424';
			}else{
				ativ.style.backgroundColor = '#242424';
				ativ.style.color = '#FFF';
			}
			_self.foco
		}

		_self.alinhamento = function (tipo) {
			_self.elements.papel.style.textAlign = tipo;
			_self.ativados(tipo);
			_self.foco();
		}

		_self.negrito = function () {
			document.execCommand('bold');
			_self.ativados('negrito');
		}

		_self.italico = function () {
			document.execCommand('italic');
			_self.ativados('italico');
		}

		_self.sublinhado = function () {
			document.execCommand('underline');
			_self.ativados('sublinhado');
		}

		self.setFont = function (fontName) {
		    document.execCommand("fontName", false, fontName);
		    _self.elements.papel.style.fontFamily = fontName;
		    _self.foco();
		}

		_self.addEvents = function() {
			window.addEventListener('load', function() {
				_self.elements.papel.style.marginTop = '25px';
				_self.foco();
			});

			window.addEventListener('keydown', function(event) {
				if (event.keyCode == 9) {
			   		this.value += "    ";
			    	return false;
			    }
			});

			_self.elements.negrito.addEventListener('click', function() {
				_self.negrito();
			});

			_self.elements.italico.addEventListener('click', function() {
				_self.italico();
			});

			_self.elements.sublinhado.addEventListener('click', function() {
				_self.sublinhado();
			});

			_self.elements.containerAlinhamento.addEventListener('click', function(event) {
				_self.alinhamento(event.target.id);
			});
		}

		self.smallCaps = function () {
			var style = _self.elements.papel.style;
			style.fontVariant = (style.fontVariant == 'small-caps') ?  ('normal') : ('small-caps'); 
			_self.ativados('smallCaps');
		}

		self.init = function() {
			_self.addEvents();	
		}

		window.EditorTexto = self;

})();	

EditorTexto.init();	
