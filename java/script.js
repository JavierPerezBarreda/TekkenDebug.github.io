// Función que se ejecuta cuando se hace clic en una opción del quiz
function checkAnswer(isCorrect, gifUrl) {
    // Cambiar el GIF de error por otro GIF (según la opción seleccionada)
    const gifImage = document.getElementById("gifImage");
    gifImage.src = gifUrl;  // Cambia el GIF

    // Mostrar el mensaje de respuesta
    const resultElement = document.getElementById("result");
    const nextQuestionContainer = document.getElementById("nextQuestionContainer");

    if (isCorrect) {
        resultElement.innerHTML = "¡Correcto! El código está bien.";
        resultElement.className = "result correct";  // Cambia el estilo a correcto
        nextQuestionContainer.style.display = "block";  // Muestra el botón de siguiente pregunta
    } else {
        resultElement.innerHTML = "¡Incorrecto! Intenta nuevamente.";
        resultElement.className = "result incorrect";  // Cambia el estilo a incorrecto
        nextQuestionContainer.style.display = "none";  // Oculta el botón de siguiente pregunta si la respuesta es incorrecta
    }
}

  // Función para reproducir el audio cuando se hace clic en un personaje
  function playAudio(audioId) {
    // Detenemos cualquier audio que esté sonando actualmente
    var audios = document.querySelectorAll('audio');
    audios.forEach(function(audio) {
        audio.pause();
        audio.currentTime = 0;
    });

    // Reproducimos el audio del personaje seleccionado
    var audio = document.getElementById(audioId);
    audio.play();
}





