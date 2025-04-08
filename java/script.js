function checkAnswer(isCorrect, videoUrl) {
    const videoPlayer = document.getElementById("videoPlayer");

    if (videoUrl) {
        videoPlayer.querySelector("source").src = videoUrl;
        videoPlayer.load();  // Recarga el video con la nueva fuente
        videoPlayer.play();  // Reproduce automáticament
    }

    const resultElement = document.getElementById("result");
    const nextQuestionContainer = document.getElementById("nextQuestionContainer");

    if (isCorrect) {
        resultElement.innerHTML = "¡Correcto! El código está bien.";
        resultElement.className = "result correct";
        nextQuestionContainer.style.display = "block";
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






