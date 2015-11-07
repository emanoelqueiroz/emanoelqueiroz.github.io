// Test browser support
window.SpeechRecognition = window.SpeechRecognition 
							|| window.webkitSpeechRecognition 
							|| null;

//caso não suporte esta API DE VOZ                              
if (window.SpeechRecognition === null) {
    document.getElementById('unsupported').classList.remove('hidden');
    document.querySelector('#rect').setAttribute('style','box-shadow: inset 0 0 20px 100px red;color:#000;');
}else {
	var recognizer = new window.SpeechRecognition();
	var transcription = document.getElementById("transcription");
	var baymax = document.getElementById("baymax");
	var baymax_head = document.getElementById("baymax_head");


	//Para o reconhecedor de voz, não parar de ouvir, mesmo que tenha pausas no usuario
	recognizer.continuous = true;

	recognizer.onresult = function(event){
		transcription.textContent = "";

		for (var i = event.resultIndex; i < event.results.length; i++) {
			if (event.results[i].isFinal) {
				transcription.textContent = 'Você disse: ' + event.results[i][0].transcript;

				if (event.results[i][0].transcript === 'ai' || event.results[i][0].transcript === 'aí') {
					baymax.textContent = "Olá, eu sou o Baymax!";
					baymax_head.style.display = "block";
				}
			} else {
            	transcription.textContent += event.results[i][0].transcript;
			}
		}
	}

	document.querySelector("#rect").addEventListener("click", function(){
		try {
            recognizer.start();
			document.getElementById("status").getElementsByTagName("span")[0].className = "gravando";
			document.getElementById("status").getElementsByTagName("span")[0].innerHTML = "Gravando";
          } catch(ex) {
          	alert("error: "+ex.message);
          }
	})
}
